# DockerPlayground
#### Getting Started 
- Install Docker Desktop - https://www.docker.com/products/docker-desktop/
- Install Docker Extension - https://code.visualstudio.com/docs/containers/overview
##### What is Docker Desktop? 
[Docker Desktop](https://www.docker.com/products/docker-desktop/) is essentially a docker client used to interface with Local and Remote docker 

We can start/stop containers or even push/pull images from directly within the Docker Desktop application instead of using the command line. 

##### What is Docker Hub? 
[Docker Hub](https://hub.docker.com/) is similar to GitHub 
You can create repositories, explore other projects, get base images, etc.

<hr/>

### Common Commands

``` shell
docker login

# Login to Docker Hub from terminal
```

``` shell
docker ps

# List of all running containers on system
```

``` shell 
docker build -t username/imagename:version.RELEASE .

# Create Image
# -t (--tag) 
```

``` shell
docker push username/image:version.RELEASE

# Push Image
```

``` shell
docker pull username/image:version.RELEASE

# Pull Image
```

``` shell 
docker container run -d -p 3000:3000  username/imagename:version.RELEASE 

# Run Container 
# -d (--detatch) : frees terminal 
# -p (--publish) : sets to run on in this instance against port in dockerfile
```

``` shell
docker stop 123

# Stop Container using CONTAINER ID
```

<hr/>

### Quick Start

1. Install Express => `npm i express`
2. Create package.json => `npm init -y`
``` javascript
	{
	
	  "name": "docker-demo",
	
	  "version": "1.0.0",
	
	  "description": "",
	
	  "main": "index.js",
	
	  "scripts": {
	
	    "start": "node index.js"
	
	  },
	
	  "keywords": [],
	
	  "author": "",
	
	  "license": "ISC",
	
	  "dependencies": {
	
	    "express": "^4.19.2"
	
	  }
	
	}
```
3. Create `index.js`
``` javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    "Docker-Demo": "NodeJs"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
``` 
4. Create `.dockerignore` and add `node_modules` folder
5. Create `Dockerfile` 
``` dockerfile
# Set the base image to use for any subsequent instructions that follow and also give this build stage a name.

# For default node app, 'node' base image is probably fine -- may want to specify version though instead of defaulting to 'slim'

# https://hub.docker.com/_/node/tags
FROM node:slim

# Define working directory
WORKDIR /app 

# Copy source => destination
COPY . /app

# Since we've added the node_modules folder to the .dockerignore, we need to reinstall
RUN npm install

# Tells the application what port to use
EXPOSE 3000

# Launch
CMD node index.js
```
6. Login to Docker via terminal
7. Create Image
8. Run container 
9. ??? 
10. Profit

<hr/>

### Quick Start (WINDOWS)

1. Install Express => `npm i express`
2. Create package.json => `npm init -y`
``` javascript
	{
	
	  "name": "docker-demo-windows",
	
	  "version": "1.0.0",
	
	  "description": "",
	
	  "main": "index.js",
	
	  "scripts": {
	
	    "start": "node index.js"
	
	  },
	
	  "keywords": [],
	
	  "author": "",
	
	  "license": "ISC",
	
	  "dependencies": {
	
	    "express": "^4.19.2"
	
	  }
	
	}
```
3. Create `index.js`
``` javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    "Docker-Demo-Windows": "Hello World!"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
``` 
4. Create `.dockerignore` and add `node_modules` folder
5. Create `Dockerfile` 
``` dockerfile
# Set the base image to use for any subsequent instructions that follow and also give this build stage a name.

# For default node app, 'node' base image is probably fine -- may want to specify version though instead of defaulting to 'slim'

# https://hub.docker.com/_/node/tags
FROM stefanscherer/node-windows:pure

# Define working directory
WORKDIR /app 

# Copy source => destination
COPY . /app

# Since we've added the node_modules folder to the .dockerignore, we need to reinstall
RUN npm install

# Tells the application what port to use
EXPOSE 3000

# Launch
CMD node index.js
```
6. Login to Docker via terminal
7. Build Image
   
Steps 8 - 10 pending
