const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

mongoose.connect("mongodb+srv://mahadarisandeep:2PUDaIhCQrEvdq1P@cluster0.2tnlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.error(err)
})



app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/employee', require('./routes/employeeRoutes'))



const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log('server is running on port 5000')
})