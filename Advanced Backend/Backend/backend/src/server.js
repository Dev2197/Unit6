const app = require('./index')

const connect = require('./configs/db')
require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port,async ()=>{    
    try{
        await connect();
        console.log(`listening  port ${port}`);
    }
    catch(err)
    {
        console.log(err.message)
    }
});