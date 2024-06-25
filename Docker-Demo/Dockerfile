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