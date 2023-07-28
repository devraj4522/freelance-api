const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rehansingh4522:devraj@cluster0.859ijdu.mongodb.net/?retryWrites=true&w=majority");

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo db connected successfully');
})

connection.on('error', (err) => {
    console.log('Mongo db connection error: ', err);
})

module.exports = mongoose;