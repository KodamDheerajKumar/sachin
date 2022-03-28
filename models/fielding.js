const mongoose = require("mongoose");

const fieldingSchema = new mongoose.Schema({
    Overs:{
        type:Number,
    },
    Mdns:{
        type:Number,
    },
    Runs:{
        type:Number,
    },
    Wkts:{
        type:Number,
    },
    Econ:{
        type:Number,
    },
    Pos:{
        type:Number,
    },
    Inns:{
        type:Number,
    },
    DismisalMade:{
        type:String,
    },
    Catch:{
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

const Fielding = new mongoose.model("Fielding",fieldingSchema)

module.exports = Fielding;