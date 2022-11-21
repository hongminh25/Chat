const mongoose = require("mongoose");
const dotenv = require('dotenv') ;

dotenv.config();

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

module.exports = Connection;