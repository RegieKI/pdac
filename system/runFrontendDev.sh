#!/bin/bash

# summary: launch pdac-frontend in dev

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

echo "Run Frontend..."
cd /home/pi/pdac-frontend
echo "Currently in ..." ${PWD}
nvm use v13.14.0
npm run dev 
