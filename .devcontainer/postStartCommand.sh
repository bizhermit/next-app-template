#!/bin/bash

npm i
npm run route -- --quiet
npm run migrate
echo "node" | sudo -S npx playwright install-deps
npx playwright install
