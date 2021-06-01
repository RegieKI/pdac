#!/bin/bash

echo "Test bash script..."

_term() { 
  echo "Caught SIGTERM signal!" 
  kill -TERM "$child" 2>/dev/null
}

trap _term SIGTERM

echo "Running Python...";
/usr/bin/python3 ./test.py &

child=$! 
wait "$child"