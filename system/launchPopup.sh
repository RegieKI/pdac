#!/bin/bash

# summary: launch zenity popup: text $1

echo "Launching popup:" $1
DISPLAY=:0 zenity --info --text="<big>$1</big>"  --width=320 --height=120
