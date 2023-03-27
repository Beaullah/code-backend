const http = require("http");
 const handleAllRequest = function (requestObject, responseObject){
    console.log("Hi, I just received a request");
    const url = requestObject.url;
    if (url == "/"){
      responseObject.write("<h1>Welcome to the home page </h1>")
    }
    else if (url === '/login'){
      responseObject.write("This is ur response")
    }
    else if (url === '/login'){
      responseObject.write("This is ur response")
    }
    else if (url === '/signup'){
      responseObject.write("Welcome ")
    }
    
   
 }
const server = http.createServer(handleAllRequest);

server.listen(3000, "127.0.0.1", function (){
   console.log("is ready")
})

