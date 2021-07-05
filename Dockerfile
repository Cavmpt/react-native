# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@3.4.1 -g
COPY . ./
DOCKER run --name myapp -p 8080:5000 \
  -e REACT_APP_GOOGLE_MAPS_API_KEY = 'AIzaSyBySxXSN4mh-NRYPaMwkR1Pbb71r1DgkB8'\
  -e REACT_APP_WEBSOCKET_BASE_URL='ws://xguardlabs-uav-monitor.herokuapp.com'\
  -e REACT_APP_LIVE_FEED_URL='http://206.172.237.218:1034'
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]