#!/usr/bin/env python
# sudo apt-get install python-dev python-rpi.gpio

import RPi.GPIO as GPIO
from time import sleep
import signal, os, subprocess

buttons = [24, 23, 18]


def utilShutdown():
    subprocess.Popen(['/bin/sh', '/home/pi/pdac/shutdownNow.sh'], shell = True, stdout=subprocess.PIPE,
                 stderr=subprocess.STDOUT)
def utilRestart():
    subprocess.Popen(['/bin/sh', '/home/pi/pdac/AUTOSTART.sh'], shell = True, stdout=subprocess.PIPE,
                 stderr=subprocess.STDOUT)
def utilToggleBrowser():
    subprocess.Popen(['/bin/sh', '/home/pi/pdac/toggleBrowser.sh'], shell = True, stdout=subprocess.PIPE,
                     stderr=subprocess.STDOUT)


def spawnDaemon(func):
    # do the UNIX double-fork magic, see Stevens' "Advanced 
    # Programming in the UNIX Environment" for details (ISBN 0201563177)
    try: 
        pid = os.fork() 
        if pid > 0:
            # parent process, return and keep running
            return
    except OSError, e:
        print >>sys.stderr, "fork #1 failed: %d (%s)" % (e.errno, e.strerror) 
        sys.exit(1)

    os.setsid()

    # do second fork
    try: 
        pid = os.fork() 
        if pid > 0:
            # exit from second parent
            sys.exit(0) 
    except OSError, e: 
        print >>sys.stderr, "fork #2 failed: %d (%s)" % (e.errno, e.strerror) 
        sys.exit(1)

    # do stuff
    func()

    # all done
    os._exit(os.EX_OK)

def button_pressed(channel):
    if channel == 18:
        print("[buttons.python] TOP: shutdown now...")
        spawnDaemon( utilShutdown )
    elif channel == 23:
        print("[buttons.python] MIDDLE: restart all processes...")
        spawnDaemon( utilRestart )
    elif channel == 24:
        print("[buttons.python] BOTTOM: toggle browser...")
        spawnDaemon( utilToggleBrowser )
def unregister_events():
    for pin in buttons:
        GPIO.remove_event_detect(pin)


if __name__ == '__main__':
    signal.signal(signal.SIGINT, unregister_events)
    try:
        GPIO.setmode(GPIO.BCM)
        for pin in buttons:
            GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
            GPIO.add_event_detect(pin, GPIO.RISING, callback=button_pressed, bouncetime=200)
        while True:
            sleep(10)
    except Exception as e:
        print("Caught exception:", e)
        unregister_events()
