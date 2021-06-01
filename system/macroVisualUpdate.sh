#!/bin/bash

# summary: run updateSystem inside lxterminal popup

DISPLAY=:0 lxterminal --command="/bin/bash -c 'sh /home/pi/pdac/system/updateSystem.sh; /bin/bash'"