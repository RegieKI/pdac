#!/bin/bash

# summary: check usb rclone status - syncs to hostname

hn=`hostname`
rclone check /home/pi/pdac/usb  RegieCloud:regie-cloud-data/$hn --one-way --exclude '.*{/**,}'
