const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("<h1>Hello world!</h1>");
});
app.get("/contact", function(request, response){
    response.send("Contact me at ");
});
app.get("/about", function(request, response){
    response.send("Im santiago, im 25 years old and i love learn about everything");
});
app.listen(3000, function(){
    console.log("The server is started on port 3000");
});

