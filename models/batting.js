const mongoose = require("mongoose");

const battingSchema = new mongoose.Schema({
    Runs:{
        type:Number,
    },
    Mins:{
        type:Number,
    },
    BF:{
        type:Number,
    },
    fours:{
        type:Number,
    },
    sixes:{
        type:Number,
    },
    SR:{
        type:Number,
    },
    Pos:{
        type:Number,
    },
    Dismissal:{
        type:String,
    },
    Inns:{
        type:Number,
    },
    Opposition:{
        type:String,
    },
    Ground:{
        type:String,
    },
    Date:{
        type:Date,
    },
    MatchNumber:{
        type:String,
    },
    Result:{
        type:String,
    },

})

const BatStats = new mongoose.model("BatStats",battingSchema)

module.exports = BatStats;