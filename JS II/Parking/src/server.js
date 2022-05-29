const app = require('./index')
const connect = require('./configs/db')
app.listen(5000, async()=>{
    await connect()
    console.log("Listening Port 5000")
})