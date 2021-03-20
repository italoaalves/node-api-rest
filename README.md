# node-api-rest

## Description

Rest APIs praticing project made with Node and Express

## How to setup this project

### Dependencies

- node
- docker
- docker-compose

### Getting started

```bash
# Clone this repository
git clone https://github.com/italoaalves/node-api-rest
cd ./node-api-rest

# Create a docker volume called restpsql or edit docker-compose.yml for the desired name
docker volume create --name=restpsql

# Create the database image using docker-compose
docker-compose -f "docker-compose.yml" up -d --build

# Install dependencies
npm install

# Setup your postgres dotenv settings according to the docker-compose.yml
# or your local database setup for development
echo "YOUR_ENV_VARIABLE=VALUE" > .env
# of course you can just use a text editor too '-'

# Start debugging
npm run dev
```
