import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie =(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 1000,//MS
        httpOnly:true, //prevent XSS attack cross-site scripting attacks
        secure:false, // CSRF attacks cross-site request forgery attacks
    } )
};

export default generateTokenAndSetCookie;