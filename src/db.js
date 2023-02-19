const mongoose = require("mongoose");

module.exports = connection = async ()=>{

    try{

        const connectionParams = {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        mongoose.set('strictQuery',false);

        await mongoose.connect(process.env.DB, connectionParams);

        console.log("Connected to database");

    }catch(error){
        console.log(error,"Couldn't connect to database");
    }





}