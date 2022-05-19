# RobotsServer

## Run server

```
cd server
npm install
npm run start
```

## Run server docker
```
docker-compose -f docker-compose-dev.yaml build
docker-compose -f docker-compose-dev.yaml up -d

docker exec -it server-container npm i
docker exec -it server-container npm run start
```