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
      response.status(400).send(error);
    }
});

app.get("/driver", async (request, response) => {
    const drivers = await driverModel.find({});
  
    try {
      response.send(drivers);
    } catch (error) {
      response.status(400).send(error);
    }
  });

app.get("/get_driver", async (request, response) =>{
  let team = request.query.team
  const drivers = await driverModel.find({"driver_team" : team});

  try {
    response.send(drivers);
  } catch (error) {
    response.status(400).send(error);
  }


});

app.put("/driver",jsonParser, async (request,response) =>{
  const driver = await driverModel.updateOne({"driver_num" : request.body.driver_num}, {"driver_team": request.body.driver_team, "driver_name": request.body.driver_name})
  try {
    if (await driver.acknowledged){
      if(await driver.modifiedCount != 0){
        response.status(200).send("Driver with number " + request.body.driver_num + "  was updated successfully.")
      } else {
        const new_driver = new driverModel(request.body);
        await new_driver.save();
        response.status(201).send("Driver with number " + request.body.driver_num + "  was created successfully.")
        
      }
    }
  } catch (error) {
    response.status(400).send(error);
  }
});

app.delete("/driver", async (request,response)=>{
  let driver_num = request.query.driver_num;
  const drivers = await driverModel.deleteMany({"driver_num" : driver_num});

  try {
    if (drivers.deletedCount == 0){
      response.statusCode = 204
      response.send()
    } else if (drivers.deletedCount>1){
      response.statusCode = 200
      response.send("Drivers with number " + driver_num + " were deleted successfully.")
    } else{
      response.statusCode = 200
      response.send("Driver with number " + driver_num + "  was deleted successfully.")

    }
  } catch (error) {
    response.status(400).send(error);
  }

});

module.exports = app;