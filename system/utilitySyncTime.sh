#!/bin/bash

# summary: sync clock to raspberrypi.org: fixes rclone errors

sudo htpdate -q -d -s www.raspberrypi.org
