#!/usr/bin/env python

# summary: buzzer noise: length[ms] $1, pause[ms] $2, repeat[int] $3, pitch[float] $4


import RPi.GPIO as GPIO
from time import sleep
from datetime import datetime
import random
import sys

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
buzzer=26
GPIO.setup(buzzer,GPIO.OUT)


if ( len(sys.argv) < 4):
  print("\n\nINSTRUCTIONS: \n\npython buzz.py {buzztime:millis:100} {pausetime:millis:100} {repeat:int:2} {pitch:float:0.0001}\n\n")
  exit(0)

beep = int( sys.argv[1] )
pause = int( sys.argv[2] )
total = int( sys.argv[3] )
pitch = float( sys.argv[4] ) 

idx = 0
toggle = True

def buzz( time ):
  timestamp = datetime.now()
  active = True
  while active:
    dt = datetime.now() - timestamp
    ms = (dt.days * 24 * 60 * 60 + dt.seconds) * 1000 + dt.microseconds / 1000.0
    active = (ms < time)
#     pitch = random.random()/10000
    GPIO.output(buzzer,GPIO.HIGH)
    sleep(pitch)
    GPIO.output(buzzer,GPIO.LOW)
    sleep(pitch)



while idx < total:

  print( "Index: " + str(idx) )

  if ( toggle ):
    print("Buzzing: " + str(beep) )
    buzz( beep )
  else:
    print("Sleeping: " + str(pause) )
    sleep( pause/1000.0 )

  toggle = not toggle
  idx = idx + 1
