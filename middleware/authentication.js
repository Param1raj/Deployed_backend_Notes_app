var jwt = require('jsonwebtoken');
const Authentication = (req,res,next)=>{
        let payload = req.body;
        const token = req.headers?.authorization?.split(" ")[1];

        jwt.verify(token, 'hush', function(err, decoded) {
           console.log(decoded) 
           if(decoded){
               user_id = decoded.id;
               req.body.user_id = user_id;
               next();  
           }else {
               res.send("please lonin");
           }
        })
}


module.exports = {Authentication};