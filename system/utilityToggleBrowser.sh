#!/bin/bash

# summary: toggle killBrowser.sh / launchBrowser.sh

SERVICE="chromium"
if pgrep "$SERVICE" >/dev/null
then
    echo "$SERVICE is open >>> closing..."
    /home/pi/pdac/system/killBrowser.sh &
else
    echo "$SERVICE is not open >>> opening..."
    /home/pi/pdac/system/launchBrowser.sh &
fi
