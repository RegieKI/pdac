#!/bin/bash

# summary: launch lxterminal: cmd $1

DISPLAY=:0 lxterminal --command="/bin/bash -c '$1; /bin/bash'"
