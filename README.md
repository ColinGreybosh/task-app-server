# task-app-server

## Installation

### Set Up Environment Variables
You must have specific environment variables set in order to launch the server:
- `NODE_ENV`
  - Set to `production` to disable printing logs to the console.
- `SERVER_PORT`
  - Set to whichever port you want the server to listen on.
- `LOG_DIRECTORY`
  - Set to the directory that you would like the server to save log files to.
- `API_BASE_URL`
  - Set to the URL you would like the server API to listen on. For example, a value of `/api` will cause the server to listen for requests sent to `http://HOST/<API_BASE_URL>:<SERVER_PORT>`.


A sample configuration is provided below.

#### Sample dotenv File
```
NODE_ENV=development
SERVER_PORT=8080
LOG_DIRECTORY=./logs
API_BASE_URL=/api
```

### Install Packages
Run the following command:
`npm i`

### Build TypeScript into JavaScript and Run
Run the following command:
`npm run start`
