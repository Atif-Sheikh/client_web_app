Prerequisites for local development
Install NodeJS (https://nodejs.org/en/download)
Install yarn globally by command: npm install -g yarn
Local Setup
Go to project directory and run commands:

yarn install
yarn start
Server will start listening on localhost: 3000

Docker Build
docker pull atifssg/react_application
docker run -p 3000:80 -d atifssg/react_application
Server will start listening on localhost: 3000