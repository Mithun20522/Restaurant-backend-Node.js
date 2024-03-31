import User from '../models/user.model.js';


export const register = async(req, res, next) => {
    try {
        const {username, email, password, profileImg, userType, address, phone} = req.body;
        if(!username || !email || !password || !userType || !phone){
            return res.status(400).json({message: "You can't leave madatory fields blank"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(409).json({message:'User already exist'});
        }

        const newUser = new User({
            username,
            email,
            password,
            address,
            phone,
            userType
        });

        await newUser.save();
        return res.status(201).json(newUser);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
