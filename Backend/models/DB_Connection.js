const mongoose = require("mongoose")

const DB =() =>{

mongoose.connect(process.env.DB_URL_STRING)
.then(()=> console.log("DB connected"))
.catch(()=> console.log("DB Error"))
}


module.exports = DB;