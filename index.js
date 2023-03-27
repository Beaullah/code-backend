const http = require("http");
 
const handleAllRequest = () =>{
    console.log("hi , i just received a request")
}
    
const server = http.createServer(handleAllRequest);

server.listen(3000, "127.0.0.1", function (){
   console.log("is ready")
})

