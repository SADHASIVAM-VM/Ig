const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
const login = require("./Routes/login");
const DB = require("./models/DB_Connection");
const cors = require('cors');
const corsOptions = require("./Middleware/Cors");

dotenv.config({path:path.join(__dirname,"config",'.env')});

//Db connections
DB()

// cors
app.use(cors(corsOptions))
//define to store data in json
app.use(express.json())
//Routes
app.use('/login', login)


//PORT
const PORT = process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log("Server Running...",PORT)  

})

