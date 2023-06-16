const jwt = require('jsonwebtoken');
const User = require('../Models/userModel.js');
const asyncHandler =require('express-async-handler');
const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            //decodes token id
            //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGMyODA3OTZjODQ0MWFjNzQ0NDI3ZiIsImlhdCI6MTY4NjkxNDc4MywiZXhwIjoxNjg4NjQyNzgzfQ.jDshCqfIIqhtuM49VG2kNQMrPyBJvCK8VLwCvGQk3nQ
            const decoded = jwt.verify(token, 'vikrant');
            req.user = await User.findById(decoded.id).select("-password");
      
            next();
          } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });
  
  module.exports = { protect };