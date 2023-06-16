const jwt=require('jsonwebtoken');
const secret = process.env.JWT_SECRET || "vikrant";
const generateToken=(id)=>{
    return jwt.sign({id},secret,{
        expiresIn:"20d",
    });
};
module.exports = generateToken;