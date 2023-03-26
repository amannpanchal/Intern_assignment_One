const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded ({extended : true}));
app.use(cors());
const router = express.Router();



router.get("/", (req,res) => {
    res.send("hello World");
})
router.post("/",() => {
    console.log(req.body);
})
























module.exports = router;