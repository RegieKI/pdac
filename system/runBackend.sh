#!/bin/bash

# summary: launch backend main.py

_term() { 
  echo "Caught SIGTERM signal!" 
  kill -TERM "$child" 2>/dev/null
}


trap _term SIGTERM

echo "Run Backend..."
cd /home/pi/pdac/pdac-backend
DISPLAY=:0 /usr/bin/python3 main.py &

child=$! 
wait "$child"