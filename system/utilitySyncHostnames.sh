#!/bin/bash

# summary: copy usb/hostname.txt to /etc/hostname and restart

real="/etc/hostname"
virtual="/home/pi/pdac/usb/hostname.txt"
if [ -f $virtual ]; then
	if cmp -s "$real" "$virtual"; then
		printf '[syncHostnames.sh] hostname "%s" is the same as "%s"\n' "$real" "$virtual"
	else
		printf '[syncHostnames.sh] hostname "%s" is different from "%s"\n' "$real" "$virtual"
		cp "$virtual" "$real"
		echo "[syncHostnames.sh] restarting with new hostname"
		sh /home/pi/pdac/system/launchPopup.sh "Setting hostname to `cat $virtual`. \n\nPlease restart for changes to take effect."
	fi
else
	echo "[syncHostnames.sh] no hostname.txt"
fi
