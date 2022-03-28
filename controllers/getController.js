require('../db');

const BatStats = require('../models/batting')
const FieldStats = require("../models/fielding");
const OdiStats = require("../models/odi");

const getBat = async (_req,res)=>{
    try{
        const getBat = await BatStats.find({});
        res.send(getBat);
    }catch(e){
        res.status(400).send(e);
    }
}

const getField = async (_req,res)=>{
    try{
        const getField = await FieldStats.find({});
        res.send(getField);
    }catch(e){
        res.status(400).send(e);
    }
}

const getOdi = async (_req,res)=>{
    try{
        const getOdi = await OdiStats.find({});
        res.send(getOdi);
    }catch(e){
        res.status(400).send(e);
    }
}

module.exports = {
    getBat,
    getOdi,
    getField
}