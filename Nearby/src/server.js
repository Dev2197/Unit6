const app = require('./index')
const connect = require('./config/db')

app.listen(5000, async()=>{
    await connect();
    console.log("Listening Port 5000")
})