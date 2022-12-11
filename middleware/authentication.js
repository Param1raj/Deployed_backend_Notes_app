var jwt = require('jsonwebtoken');
const Authentication = (req,res,next)=>{
        let payload = req.body;
        const token = req.headers?.authorization?.split(" ")[1];
        
        let decoded = jwt.verify(token, 'hush')
         console.log(decoded) 
         if(decoded){
             user_id = decoded.id;
             req.body.user_id = user_id;
             next();  
         }else {
             res.send("Please login");
         }
}


module.exports = {Authentication};