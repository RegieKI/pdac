#!/bin/bash

# summary: clone sd card to zipped image: source $1, destination $2

echo First argument (ie. /dev/sdc) : "$1"
echo Second argument (ie. my-image) : "$2"
echo Copying to: /home/pi/pdac/usb
sudo dd bs=4M if=$1 status=progress | gzip > /home/pi/pdac/usb/$2_`date +%d%m%y`.img.gz
echo Finished! 
