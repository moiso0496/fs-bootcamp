# Full Stack Bootcamp

This repo contains the a dockerized Node.JS Web API that connects to a MongoDB container, this Web API has all the CRUD operations to GET, UPDATE and DELETE documents from a Formula 1 drivers database.

# How to run it? 
With Docker already installed on your machine or server, and the repository cloned. 

Move to the repo folder and run the following command:
```
docker compose up
```


The ```docker-compose.yml``` file will create the two containers, will configure the Node.JS container with the ```Dockerfile``` that is on this repo. When creating the MongoDB container the script called ```init-mongo.js``` will bootstrap the databse with some documents.

The command will automatically start the two containers and now you can start making request to this address:
```
http://localhost:3000
```

# API Doc

## /driver endpoint
### - GET
This method will get all the documents inside the collection of the DB

### - POST
This method will create a document inside the DB, using the following payload:

```
{
    "driver_num" : Integer,
    "driver_name" : "",
    "driver_team" : ""
}
```

### - PUT
This method will update a document based on the **driver_num**, that is being send to the endpoint with the following payload:

```
{
    "driver_num" : Integer,
    "driver_name" : "",
    "driver_team" : ""
}
```
If the driver is not on the database, it will be created.

### - DELETE
This method will delete all the documents found on the database based on the query string: 
```
http://localhost:3000/driver?driver_num=2
```

## /get_driver endpoint
### - GET
This method will get all the documents that has the query string **team**.
```
http://localhost:3001/get_driver?team=Mercedes
```