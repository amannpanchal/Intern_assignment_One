const express = require("express");
const app = express();
const router = require("./Folders/Routes/routes.js");
app.use(router);



app.listen(1000,()=> {
    console.log("The app is running successfully");

})