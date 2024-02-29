const express =require('express');
const mongoose =require('mongoose');
const cors =require("cors");

const routes =require('./routes/ToDoRoute')

require('dotenv').config()

const app =express()
const PORT =process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`बैकएंड मोंगोडब से जुड़ा है`))
.catch((err)=> console.log(err))


app.use(routes)
app.listen(PORT,()=> console.log(`सर्वर पोर्ट ${PORT} पर चल रहा है`))
