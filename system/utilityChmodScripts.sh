#!/bin/bash

# summary: chmod -x all bash scripts

echo Setup Script

rfkill unblock all
chmod +x ./*.sh

return 0