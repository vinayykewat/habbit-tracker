// import mongoose
const mongoose = require('mongoose');

// built mongoose schema 
const habitSchema = new mongoose.Schema({
    habit:{
        type : String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    end : {
        type:String
    },
    frequency : {
        type:String,
        required:true
    },
    date:{
        type:String
    },
    time:{
        type:String,
        required:true
    },
    streak:{
        type:Number,
        default:0
    },
    days:{
        one:{
            type:String,
            default:null
        },
        two:{
            type:String,
            default:null
        },
        three:{
            type:String,
            default:null
        },
        four:{
            type:String,
            default:null
        },
        five:{
            type:String,
            default:null
        },
        six:{
            type:String,
            default:null
        },
        seven:{
            type:String,
            default:null
        }
    }

});

// built mode for mongoose
const Habit = mongoose.model('Habit',habitSchema);

// export for impport any where
module.exports = Habit;