const express = require("express");
const driverModel = require("./driver_schema.js");
const bodyParser = require('body-parser')
const app = express();

var jsonParser = bodyParser.json()

app.post("/driver",jsonParser, async (request, response) => {
    const driver = new driverModel(request.body);
  
    try {
      await driver.save();
      response.send(driver);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/driver", async (request, response) => {
    const drivers = await driverModel.find({});
  
    try {
      response.send(drivers);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get("/get_driver", async (request, response) =>{
  let team = request.query.team
  const drivers = await driverModel.find({"driver_team" : team});

  try {
    response.send(drivers);
  } catch (error) {
    response.status(500).send(error);
  }


});

app.put("/driver",jsonParser, async (request,response) =>{
  const driver = await driverModel.updateOne({"driver_num" : request.body.driver_num}, {"driver_team": request.body.driver_team})
  try {
    if (await driver.acknowledged){
      response.send(driver);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/driver", async (request,response)=>{
  let driver_num = request.query.driver_num;
  const drivers = await driverModel.deleteMany({"driver_num" : driver_num});

  try {
    if (drivers.deletedCount == 0){
      response.statusCode = 204
      response.send()
    } else{
      response.statusCode = 200
      response.send("Driver " + driver_num + " deleted successfully.")
    }
  } catch (error) {
    response.status(500).send(error);
  }

});

module.exports = app;