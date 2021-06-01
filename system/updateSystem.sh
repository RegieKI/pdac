#!/bin/bash

# summary: git pull pdac from branch stable

_term() { 
  echo "Caught SIGTERM signal!" 
  kill -TERM "$child" 2>/dev/null
}

trap _term SIGTERM

/home/pi/pdac/system/killBrowser.sh
/home/pi/pdac/system/killNode.sh
/home/pi/pdac/system/killPython.sh

echo "[PDAC] Updating:"
cd /home/pi/pdac
echo "[PDAC] Pulling recursive git respositories:"
git pull stage stable
cd /home/pi/pdac/pdac-backend
git pull stage stable

#echo "[PDAC] Restarting in 5 seconds..."
#sleep 5
#sudo reboot now&

#child=$! 
#wait "$child"
