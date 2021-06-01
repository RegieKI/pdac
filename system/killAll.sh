#!/bin/bash

# summary: pkill node, chromium, python and terminal

/home/pi/pdac/system/killNode.sh
/home/pi/pdac/system/killBrowser.sh
/home/pi/pdac/system/killPython.sh
/home/pi/pdac/system/killTerminal.sh
python /home/pi/pdac/system/pythonButtonsLCD.py &