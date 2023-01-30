const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoUrl = ''


exports.connect = () => {
    mongoose.connect(mongoUrl, {
        useNewURLParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to database");
    }).catch(error => {
        console.log("database connection failed");
    })
}