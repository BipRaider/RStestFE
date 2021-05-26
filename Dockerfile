FROM mhart/alpine-node:14
#specify version of node that was used in the projects development


WORKDIR /usr/src/app

# create a directory for the image filesystem
COPY package*.json ./
#copy into image file system
RUN npm install --production
# Run the command inside your image filesystem.
COPY . .
# Copy the rest of your app's source code from your host to your image filesystem.
EXPOSE 3000
#Expose port
CMD ["npm", "start"]
# Run the specified command within the container.
