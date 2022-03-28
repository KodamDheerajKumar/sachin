const csv = require('csv-parser');
const fs = require('fs');
require('../db')

const OdiStats = require("../models/odi");
const BatStats = require("../models/batting");
const FieldStats = require("../models/fielding");

const postBat = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        let bat = new BatStats(data);
        await bat.save();
    })
    .on('end',async () =>{
        var string = encodeURIComponent('Upload Successfully');
        res.redirect('/?msg='+string);
    });
}

const postField = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        //console.log(data);
        let field = new FieldStats(data);
        await field.save();
    })
    .on('end',async () =>{
        res.redirect('/');
    });
}

const postOdi = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        let odi = new OdiStats(data);
        await odi.save();
    })
    .on('end',async () =>{
        res.redirect('/');
    });
}

module.exports = {
    postBat,
    postField,
    postOdi
}