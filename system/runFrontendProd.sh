#!/bin/bash

# summary: launch pdac/app frontend in production

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

echo "Run Frontend..."
cd /home/pi/pdac/app
echo "Currently in ..." ${PWD}
. ~/.profile
echo "Reloaded .profile"
nvm use v13.14.0
npm start
# /home/pi/.nvm/versions/node/v13.14.0/bin/node /home/pi/pdac/pdac-frontend/__sapper__/build
