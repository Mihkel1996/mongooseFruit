const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

//fruit schema - a blueprint for the object that will be saved in the database
const fruitSchema = new mongoose.Schema({
    /*name: String, //a fruit object will have a name property of String type
    rating: Number, //rating as a Number
    review: String //review as some text*/
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]//the property name must not be empty
    },
       rating: {
           type: Number, //must be a number
           min: 1, //minimum value allowed 1
           max: 10 //maximum value allowed 10
       }, 
       review: String    
});

//use the schema to create a Mongoose model
 const Fruit = mongoose.model("Fruit", fruitSchema);
 //create a fruit document
 /* const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
}); */
/* const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
}); */

/*const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Soft texture"
});
 
const lemon = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Sour as hell"
});*/
/* Fruit.insertMany([banana, lemon], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Fruit successfully added to the fruitDB");
    }
}) */
//create a fruit document
/*const fruit = new Fruit({
    name: "Apple",
    //rating: 11,
    review: "Sweet and crunchy"
});*/
/*Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        console.log(fruits);
    }
});*/
Fruit.find(function(error, fruits)  {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    /*Fruit.update({_id: "5e8e7e074f10085a380b2847"}, {review: "Juicy fruit"}, function(error){
        if(error){
            console.log(error);
        } else {
            console.log("Record successfully updated.");
        }
    });*/
    Fruit.deleteMany({name: "orange"}, function(error){
        if(error){
            console.log(error);
        } else {
            console.log("Item successfully deleted.");
        }
    });
    
        
    }
});

const fruit = new Fruit({
    rating: 10,
    review: "Yummy"
});

const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
orange.save();
//saving the document (our object) to the database
//fruit.save();
//people schema - a blueprint for the object that will be saved in the database
const peopleSchema = new mongoose.Schema({
    firstName: String, //a fruit object will have a name property of String type
    lastName: String, //rating as a Number
    age: Number //review as some text
});

//use the schema to create a Mongoose model
const People = mongoose.model("Person", peopleSchema);
//create a fruit document
const person = new People({
    firstName: "John",
    lastName: "Doe",
    age: 30
});
//saving the document (our object) to the database
person.save();
app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});