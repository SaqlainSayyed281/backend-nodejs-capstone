const User = require("../Models/userSchema")
const bcrypt = require("bcrypt")

exports.Register = async(req , res)=>{
    try{
      const {name , email , password} = req.body 
        
      if (!name || !email || !password) {
        res.status(400).json({message : "all field required"})
      }

      const existuser = await User.findOne({email})

      if (existuser) {
        return res.json({message : "user already exists"})
      }

      const hashed = await bcrypt.hash(password,10)

      const user = await User.create({
        name ,
        email,
        password : hashed
      })
      res.status(200).json({
        message : "User Registered Successfully",
        _id : user._id,
        name : user.name

      })

    }
    catch(err){
     res.status(500).json({message : err.message})
    }
}