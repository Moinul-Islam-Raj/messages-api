const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text:{
        type:String,
        required:[true, "provide a message"]
    },
    username:{
        type:String,
        default:"unknown"
    }
},
{
    timestamps:true,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message