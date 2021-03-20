# node-api-rest
Rest APIs praticing project made with Node and Express

## How to setup this project

```bash
# Clone this repository
git clone https://github.com/italoaalves/node-api-rest

# Create a docker volume called restpsql or edit docker-compose.yml for the desired name
docker volume create --name=restpsql

# Create the database image using docker-compose
docker-compose -f "docker-compose.yml" up -d --build

# Install dependencies
npm install

# Setup your postgres dotenv settings according to the docker-compose.yml
# of course you can just use a text editor too '-'
echo "YOUR_ENV_VARIABLE=VALUE" > .env

# Start debugging
npm run dev
```

