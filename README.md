## Description

Tick-Tack-Toe game React UI

additionally, first you must run backend-api, from:
https://github.com/octopusLighthouse/tttGameApi

Here are two react-app run methods:

1. Simple react-app run, using terminal:

### `npm install`
### `npm run start`

2. Run app in docker container, first step create image next step create container:

### `docker build -t ttt-game-ui .`
### `docker run --name tttGameUI -p 80:3000 -d ttt-game-ui`
