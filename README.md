# Train

Controller and interface to a model railway.

## Architecture

This is designed as a self-contained app which can interface with a model railway through some kind of microcontroller. At this point it is nothing more than a concept as I don't have a model railway to test on.

## Configuration

Copy `.env.example` to `.env` and configure everything there. Or, set the appropriate environment variables in your deployment environment of choice.

### Installation

- Run `npm install` to install dependencies and build the web UI.

### Running

- Run `npm start` to start the web server. The port is set in the environment variables as `PORT`; the default is 3000.

You can then access the web UI at `http://localhost:3000`.

### Development

- Run `npm run dev:server` to run the server and watch for changes.

- Run `npm run dev:client` to run a hot-reload webpack-dev-server on top of this for the web UI. This can be accessed by default at `http://localhost:3001` (the port is set to the environment variable PORT_WDS).

- Run `npm test` to test the server.
- Run `npm run test:client` to test the web app.

