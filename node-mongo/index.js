const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017';
const dbname = 'conFusion';
/**
 * Import model
 */
const Dishes = require('./models/dishes');
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log("Connected correcty to server");

    /**
     * Create new dishes object
     */
    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
        .then((dishes) => {
            return Dishes.find({})
        })
        .then((Dishes) => {
            return Dishes.remove({})
        }).
        then(() => {
            return mongoose.connection.close()
        }).
        catch((err) => {
            console.log(err);

        });

    // const db = client.db(dbname);
    // dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
    //     "dishes").then((result) => {
    //         console.log("Insert Document:\n", result.ops);

    //         return dboper.findDocuments(db, "dishes")
    //     })
    //     .then((docs) => {
    //         console.log("Found Documents:\n", docs);

    //         return dboper.updateDocument(db, { name: "Vadonut" },
    //             { description: "Updated Test" }, "dishes")
    //     })
    //     .then((result) => {
    //         console.log("Updated Document:\n", result.result);

    //         return dboper.findDocuments(db, "dishes")
    //     })
    //     .then((docs) => {
    //         console.log("Found Updated Documents:\n", docs);

    //         return db.dropCollection("dishes")
    //     })
    //     .then((result) => {
    //         console.log("Dropped Collection: ", result);

    //         client.close();
    //     })
    //     .catch((err) => console.log(err))
})
    .catch((err) => console.log(err))