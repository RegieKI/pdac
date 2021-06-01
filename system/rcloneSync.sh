#!/bin/bash

# summary: one-directional sync to cloud - folder is hostname

hn=`hostname`
rclone copy /home/pi/pdac/usb  RegieCloud:regie-cloud-data/$hn  -vv --exclude '.*{/**,}'
