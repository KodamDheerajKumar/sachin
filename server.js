const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require("./db")
app.use(cors())

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

const web = require('./routers/web');
const batRoute = require("./routers/batRoute")  
const fieldRoute = require("./routers/fieldRoute")
const odiRoute = require("./routers/odiRoute")

app.use('/', web);
app.use(fieldRoute);
app.use(odiRoute);
app.use(batRoute);

app.listen(port,()=> {
    console.log(`connection is live at port no. ${port}`);
})