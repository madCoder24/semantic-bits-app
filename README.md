# semantic-bits-app
Coding exercise application for Semantic Bits

# Setup

To start and run this application, it must be connected to a MongoDB database whether that is localhost or a separate server. This project was currently using localhost for the MongoDB instance. If that is to change then it must also be reflected in "server/routes/api.js". Once that is changed appropriately then run "yarn install" to install any dependencies. Next run "ng build" to build the application and finally run "node server.js". This will start the localhost server on port 3000. Once the MongoDB instance is setup data will have to then be imported using mongoimport. The following command should be used "mongoimport --db adverse --collection adverseEvents --file mongodb_adverse_events.json". This will create the database and create a collection filled with data from the JSON file.

# Commands to run
yarn install

ng build

node server.js

# MongoDB Download and Install Instructions
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/