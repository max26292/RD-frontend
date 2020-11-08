FROM max26292/react_preinstall:latest as builder

WORKDIR /home/app 

COPY package.json ./
COPY yarn.lock ./
# RUN npm install --silent
RUN yarn install 
COPY . ./
CMD ["yarn", "start"]