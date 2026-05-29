const express =
require("express");

const router =
express.Router();

const Message =
require("../models/Message");

router.post(
"/contact",
async(req,res)=>{

try{

const newMessage =
new Message({

name:req.body.name,
email:req.body.email,
message:req.body.message

});

await newMessage.save();

res.json({
success:true
});

}catch(error){

console.log(error);

res.json({
success:false
});

}

});

module.exports = router;