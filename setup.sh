#!/bin/bash
# One-time setup script to create python virtual environment and install necessary dependencies 

python3 -m venv server/scripts/venv
source server/scripts/venv/bin/activate
pip install -r server/scripts/requirements.txt
deactivate

cd client && npm install
cd ../server && npm install