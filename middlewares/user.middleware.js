import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.acess_token_restaurent;
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err || (decoded.userType !== 'admin')) {
            return res.status(401).json({ message: "Access denied" });
        }
        else{
            next()
        }
        
    });
    
};
