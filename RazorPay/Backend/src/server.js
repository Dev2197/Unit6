const app = require('./index')
const connect = require('./config/db')
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, async()=>{
    try {
        await connect()
        console.log(`Listening Port ${port}`)
    } catch (error) {
        console.log(error)
    }
})
