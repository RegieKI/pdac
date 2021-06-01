#!/bin/bash

# summary: launch chromium with fullscreen kiosk flags

id=`sh /home/pi/pdac/system/findInputDeviceID.sh ADS`

echo "Found touch input id" $id
ip=`./utilityShowIP.sh`
echo "Run Browser..." $ip $1

DISPLAY=:0 chromium-browser --kiosk --disable-features=TranslateUI --touch-devices=$id --check-for-update-interval=31536000 --app-auto-launched --disable-pinch --incognito --noerrdialogs --disable-suggestions-service --disable-translate --disable-save-password-bubble --disable-session-crashed-bubble --disable-infobars $1 --app=http://localhost:3000/overview &
