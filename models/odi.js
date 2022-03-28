const mongoose = require("mongoose");

const odiSchema = new mongoose.Schema({
    batting_score:{
        type:Number,
    },
    wickets:{
        type:Number,
    },
    runs_conceded:{
        type:Number,
    },
    catches:{
        type:Number,
    },
    stumps:{
        type:Number,
    },
    opposition:{
        type:String,
    },
    ground:{
        type:String,
    },
    date:{
        type:Date,
    },
    match_result:{
        type:String,
    },
    result_margin:{
        type:String,
    },
    toss:{
        type:String,
    },
    batting_innings:{
        type:String,
    },

})

const OdiStats = new mongoose.model("OdiStats",odiSchema)

module.exports = OdiStats;