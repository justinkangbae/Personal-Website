const express     = require("express"),
    app         = express();

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started");
});