#!/bin/bash

# summary: format disk to exfat: disk $1

read -p "Complete format $1 (y/n)?" CONT
if [ "$CONT" = "y" ]; then
sudo mkfs.exfat -n PDAC $1
fi
