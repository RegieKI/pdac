#!/bin/bash

# summary: create rclone directory - syncs to hostname

hn=`hostname`
rclone mkdir  RegieCloud:regie-cloud-data/$hn  -vv
