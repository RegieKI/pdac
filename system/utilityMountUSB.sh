#!/bin/bash

# summary: mount usb to /home/pi/pdac/usb 

sudo mount -t auto /dev/sda1 /home/pi/pdac/usb -o umask=000
if mountpoint -q /home/pi/pdac/usb 
then
   echo "Successfully mounted USB..."
else
   echo "Could not mount USB..."
   #sh /home/pi/pdac/system/launchPopup.sh "USB could not be mounted."
   #sudo shutdown now
fi
