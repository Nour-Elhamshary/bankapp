const jwt = require("jsonwebtoken");

exports.checkAuth = (request,response,next)=>{

    const authHeader = request.headers.authorization;
    if(!authHeader){
        return response.status(403).json({
            status:"Error",
            message:"Token is Required"
        });
    }

    const token = authHeader.split(" ")[1];
    if(token){
        jwt.verify(token, "123456789", (error, decodedtoken)=>{
            if(error){
                return response.status(401).json({
                    status:"Error",
                    message:"Invalid Token"
                });
            }
            next();
            request.decodedtoken = decodedtoken;
            console.log(decodedtoken);


        })
    } else{
        return response.status(403).json({
            status:"Error",
            message:"Token is Required to Access"
        });
    }
};