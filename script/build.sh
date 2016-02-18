#!/bin/bash
set -eu

ROOT_PATH=/flux-react-router-todoapp

npm run clean:build && \
npm run webpack && \
MAIN_SCRIPT=$ROOT_PATH/assets/$(basename `ls build/assets/app-*.js`) npm run jade:build
