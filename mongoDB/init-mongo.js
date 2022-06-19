db.createUser(
    {
        user: "writter",
        pwd: "threepoints",
        roles: [
            {
                role: "readWrite",
                db: "fsd-formula1"
            }
        ]
    });

db.createCollection('drivers');
db.getCollection('drivers').createIndex({driver_num:1}, {unique:true})
db.drivers.insertOne(
    {
        "driver_num": 44,
        "driver_name": "Lewis Hamilton",
        "driver_team": "Mercedes"
    }
);
db.drivers.insertOne(
    {
        "driver_num": 1,
        "driver_name": "Max Verstappen",
        "driver_team": "Oracle RedBull Racing"
    }
);
db.drivers.insertOne(
    {
        "driver_num": 16,
        "driver_name": "Charles LeClerc",
        "driver_team": "Ferrari"
    }
);
db.drivers.insertOne(
    {
        "driver_num": 11,
        "driver_name": "Sergio Perez",
        "driver_team": "Oracle RedBull Racing"
    }
);