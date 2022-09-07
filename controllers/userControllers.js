const User=require ("../models/userSchema")
const bcryptjs = ("bcryptjs")

const addUser = async(req,res) =>{
    const salt =await bcryptjs.gensalt(10)
    const hsahedpassword =await bcryptjs.hashed(req.body.password,salt)
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    await newUser.save();
    res.status(201).json({
    _id: newUser._id,
    username: newUser.username,
    email:newUser.email
})
}
module.exports={addUser}