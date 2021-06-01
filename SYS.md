
* [*autostart*](https://github.com/RegieKI/pdac/blob/stable/system/autostart.sh) - lauches AUTOSTART.sh within LXTerminal
* [*dangerDeleteRecordings*](https://github.com/RegieKI/pdac/blob/stable/system/dangerDeleteRecordings.sh) - deletes contents of usb/recordings
* [*editStaticIP*](https://github.com/RegieKI/pdac/blob/stable/system/editStaticIP.sh) - nano dhcpcd.conf
* [*findInputDeviceID*](https://github.com/RegieKI/pdac/blob/stable/system/findInputDeviceID.sh) - returns index of LCD touchscreen input
* [*killAll*](https://github.com/RegieKI/pdac/blob/stable/system/killAll.sh) - pkill node, chromium, python and terminal
* [*killBrowser*](https://github.com/RegieKI/pdac/blob/stable/system/killBrowser.sh) - pkill chromium
* [*killNode*](https://github.com/RegieKI/pdac/blob/stable/system/killNode.sh) - pkill node
* [*killPython*](https://github.com/RegieKI/pdac/blob/stable/system/killPython.sh) - pkill python
* [*killTerminal*](https://github.com/RegieKI/pdac/blob/stable/system/killTerminal.sh) - pkill xterm && lxterminal
* [*launchBrowser*](https://github.com/RegieKI/pdac/blob/stable/system/launchBrowser.sh) - launch chromium with fullscreen kiosk flags
* [*launchCalibrator*](https://github.com/RegieKI/pdac/blob/stable/system/launchCalibrator.sh) - launch xinput_calibrator for touchscreen
* [*launchLXTerminal*](https://github.com/RegieKI/pdac/blob/stable/system/launchLXTerminal.sh) - launch lxterminal: cmd `$1`
* [*launchPopup*](https://github.com/RegieKI/pdac/blob/stable/system/launchPopup.sh) - launch zenity popup: text `$1`
* [*launchXterm*](https://github.com/RegieKI/pdac/blob/stable/system/launchXterm.sh) - launch xterm terminal
* [*macroVisualUpdate*](https://github.com/RegieKI/pdac/blob/stable/system/macroVisualUpdate.sh) - run updateSystem inside lxterminal popup
* [*pythonButtonsLCD*](https://github.com/RegieKI/pdac/blob/stable/system/pythonButtonsLCD.py) - physical touchscreen buttons listener
* [*pythonBuzz*](https://github.com/RegieKI/pdac/blob/stable/system/pythonBuzz.py) - buzzer noise: length[ms] `$1`, pause[ms] `$2`, repeat[int] `$3`, pitch[float] $4
* [*rcloneCheck*](https://github.com/RegieKI/pdac/blob/stable/system/rcloneCheck.sh) - check usb rclone status - syncs to hostname
* [*rcloneMkdir*](https://github.com/RegieKI/pdac/blob/stable/system/rcloneMkdir.sh) - create rclone directory - syncs to hostname
* [*rcloneSync*](https://github.com/RegieKI/pdac/blob/stable/system/rcloneSync.sh) - one-directional sync to cloud - folder is hostname
* [*restartDHCP*](https://github.com/RegieKI/pdac/blob/stable/system/restartDHCP.sh) - restart dhcpcd.service
* [*runBackend*](https://github.com/RegieKI/pdac/blob/stable/system/runBackend.sh) - launch backend main.py
* [*runFrontendDev*](https://github.com/RegieKI/pdac/blob/stable/system/runFrontendDev.sh) - launch pdac-frontend in dev
* [*runFrontendProd*](https://github.com/RegieKI/pdac/blob/stable/system/runFrontendProd.sh) - launch pdac/app frontend in production
* [*updateSystem*](https://github.com/RegieKI/pdac/blob/stable/system/updateSystem.sh) - git pull pdac from branch stable
* [*utilityChmodScripts*](https://github.com/RegieKI/pdac/blob/stable/system/utilityChmodScripts.sh) - chmod -x all bash scripts
* [*utilityCloneImage*](https://github.com/RegieKI/pdac/blob/stable/system/utilityCloneImage.sh) - clone sd card to zipped image: source `$1`, destination `$2`
* [*utilityFormatUSB*](https://github.com/RegieKI/pdac/blob/stable/system/utilityFormatUSB.sh) - format disk to exfat: disk `$1`
* [*utilityMountUSB*](https://github.com/RegieKI/pdac/blob/stable/system/utilityMountUSB.sh) - mount usb to /home/pi/pdac/usb 
* [*utilityOpenWebsite*](https://github.com/RegieKI/pdac/blob/stable/system/utilityOpenWebsite.sh) - generic launch chromium: url `$1`
* [*utilityRebootNow*](https://github.com/RegieKI/pdac/blob/stable/system/utilityRebootNow.sh) - reboot immediately
* [*utilityShowIP*](https://github.com/RegieKI/pdac/blob/stable/system/utilityShowIP.sh) - print eth0 ip address
* [*utilityShutdownNow*](https://github.com/RegieKI/pdac/blob/stable/system/utilityShutdownNow.sh) - shutdown immediately
* [*utilitySyncHostnames*](https://github.com/RegieKI/pdac/blob/stable/system/utilitySyncHostnames.sh) - copy usb/hostname.txt to /etc/hostname and restart
* [*utilitySyncTime*](https://github.com/RegieKI/pdac/blob/stable/system/utilitySyncTime.sh) - sync clock to raspberrypi.org: fixes rclone errors
* [*utilityToggleBrowser*](https://github.com/RegieKI/pdac/blob/stable/system/utilityToggleBrowser.sh) - toggle killBrowser.sh / launchBrowser.sh