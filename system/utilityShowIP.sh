#!/bin/bash

# summary: print eth0 ip address

ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'