const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()




const apiLimit = rateLimit({
	windowMs: 60000, // 1 minute
	max: 10, // Limit each IP to 10 requests per `window` (here, per minute)
	
})



app.get('/ip',apiLimit,(request, response) => {
    // console.log(request.ip)
response.send(request.ip)
})


app.listen(5000,()=>{
    console.log("Listening on port 5000")
})