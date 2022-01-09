const mongoose = require("mongoose")

const prodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:false}
})

module.exports = mongoose.model("produst",prodSchema)