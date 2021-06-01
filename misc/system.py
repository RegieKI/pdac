import argparse
import signal
import socket
import subprocess
import gi
gi.require_version('Gtk', '3.0')
from gi.repository import GLib, Gtk
from queue import Queue, Empty
import time
import threading
import os
import json



from flask import Flask, request, jsonify, abort, make_response

USB_ROOT = "./DATA/"

USE_GPIO = os.uname()[4][:3] == 'arm'

if USE_GPIO:
    import RPi.GPIO as GPIO
    GPIO.setmode(GPIO.BCM)


BUTTON_1 = 0
BUTTON_2 = 0
BUTTON_3 = 0

global finalAction

SYS_CONFIG     = "./usb/var/config-system.json"

SETUP           = "./setup.sh"
CHANGE_HOSTNAME = "./changeHostname.sh"
RESTART         = "./restart.sh"
UPDATE          = "./update.sh"

TEST           = "./testBash.sh"
RUN_BACKEND    = "./runBackend.sh"
RUN_FRONTEND   = "./runFrontend.sh"
LAUNCH_BROWSER = "./launchBrowser.sh"

def setupGPIO():
    print("Pi decected. Setting up GPIOs")

    GPIO.setup(BUTTON_1, GPIO.IN)
    GPIO.setup(BUTTON_2, GPIO.IN)
    GPIO.setup(BUTTON_3, GPIO.IN)


def launchBashProcess(path, blocking = False, exit_after = False):
    
    sh = subprocess.Popen([path], shell = True, stdout=subprocess.PIPE )
    
    if(blocking):
        sh.wait()

    if(exit_after):
        print("Exiting after {}".format(path))
        exit(-1)#

    return sh


def defaultClose():
    print("Closing normally")
    pass

def reboot():
    print("Reboot")
    os.system('reboot')
    pass

def shutdown():
    print("Shutdown")
    os.system('shutdown -h now')

def restart():
    print("Restart")
    launchBashProcess(RESTART, blocking=False, exit_after=False)

def update():
    print("Update")
    launchBashProcess(UPDATE, blocking=False, exit_after=False)

class FlaskServer(object):
    
    def __init__(self, port = 8999):
        self.port = port
        self.app = Flask("System Server")
        self.app.add_url_rule("/"         , "Ping"    , self.ping    , methods=['GET'])
        self.app.add_url_rule("/reboot/"  , "Reboot"  , self.reboot  , methods=['GET'])
        self.app.add_url_rule("/shutdown/", "Shutdown", self.shutdown, methods=['GET'])
        self.app.add_url_rule("/restart/" , "Restart" , self.restart , methods=['GET'])
        self.app.add_url_rule("/update/"  , "Update"  , self.update  , methods=['GET'])

    def ping(self):
        return jsonify({
            "msg" : "Hello!"
    })

    def reboot(self):   
        global finalAction
        finalAction = reboot
        Gtk.main_quit()
        return  jsonify({"msg" : "Byeeeee!" })

    def shutdown(self):   
        global finalAction
        finalAction = shutdown
        Gtk.main_quit()
        return  jsonify({ "msg" : "Byeeeee!" })

    def restart(self):   
        global finalAction
        finalAction = restart
        Gtk.main_quit()
        return  jsonify({ "msg" : "Byeeeee!" })

    def update(self):   
        global finalAction
        finalAction = update
        Gtk.main_quit()
        return  jsonify({ "msg" : "Byeeeee!" })

    def close(self):
        pass

    def run(self):
        self.app_server = threading.Thread(target=self.start_app_thread)
        self.app_server.start()


    def start_app_thread(self):
        print("[FlaskServer] Starting API on port {}".format(self.port))
        self.app.run(host="0.0.0.0", port=self.port, debug=True, use_reloader=False)   



def terminateChildProcesses():
    for name, sh in childProcesses:
        if(sh):
            ret = sh.poll()

            if(ret):
                print("{} returned: [{}]".format(name,  ret))

            else:
                print("{} terminating...".format(name))
                #print(sh.stdout.read())
                try:
                    sh.wait(timeout=1.0)
                    print("{} terminated".format(name))
                    print(sh.stdout)
                except subprocess.TimeoutExpired:
                    print("Killing {}".format(name))
                    sh.kill()
                    try:
                        sh.wait(timeout=1.0)
                        print("Killed {}: PID".format(name, sh.poll()))
                        print(sh.stdout)
                    except subprocess.TimeoutExpired:
                        print("Failed to kill {}: PID".format(name, sh.poll()))


def setup():
    sh = launchBashProcess(SETUP, blocking=True, exit_after=False)
    print("{} returned []".format(SETUP, sh.returncode))


def checkHostname(sysConfig):
    dummy    = sysConfig["dummy-run"]

    name     = sysConfig["name"]
    index    = sysConfig["index"]
    hostname = "{:02d}-{}".format(index, name)
    print("Expecting hostname {}".format(hostname))
    
    sysHostname = socket.gethostname()
    print("Found hostname {}".format(sysHostname))

    if(dummy):
        return

    if(sysHostname is not hostname ):
        launchBashProcess(CHANGE_HOSTNAME, blocking=True, exit_after=True)
        


def checkWifi(sysConfig):
    print("checkWifi not implimented")
    pass

def runChecks():
    if(os.path.exists(SYS_CONFIG) ):
        with open(SYS_CONFIG, 'r') as f:
            sysConfig = json.load(f)

        checkHostname(sysConfig)

        checkWifi(sysConfig)
    else:
        print("Can't find {}".format(SYS_CONFIG))
        exit(0)
     

def main():
    # Nice linear things up here
    setup()

    runChecks()

    ## Careful! program has multiple threads/subprocessed bellow this point.

    global childProcesses

    # Launch processed
    childProcesses = [
        ("test    ", launchBashProcess(TEST          )),
        ("backend ", launchBashProcess(RUN_BACKEND   )),
        ("frontend", launchBashProcess(RUN_FRONTEND  )),
        ("browser ", launchBashProcess(LAUNCH_BROWSER))
    ]

    global finalAction
    finalAction = defaultClose

    try:
        # Setup GPIOs
        if(USE_GPIO):
            setupGPIO()

        # Start Server
        flaskServer = FlaskServer()
        flaskServer.run()
        
        # Main Thread
        GLib.unix_signal_add(GLib.PRIORITY_DEFAULT, signal.SIGINT, Gtk.main_quit)
        Gtk.main()

    finally:
        # Clean up
        if(USE_GPIO):
            GPIO.cleanup()

        
        terminateChildProcesses()
        
        flaskServer.close()

        while GLib.MainContext.default().iteration(False):
            pass

        if(finalAction):
            finalAction()

        print("End")
        exit()

if __name__ == '__main__':
    main()

