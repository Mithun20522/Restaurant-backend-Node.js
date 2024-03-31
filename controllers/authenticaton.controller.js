import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const register = async(req, res) => {
    try {

        const {username, email, password, userType, address, phone} = req.body;
        if(!username || !email || !password || !userType || !phone){
            return res.status(400).json({message: "You can't leave madatory fields blank"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(409).json({message:"You're already registered ! Please login"});
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            userType
        });

        await newUser.save();
        return res.status(201).json(newUser);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const login = async(req, res) => {
    try {

        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "All fields are mandatory"});
        }

        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(404).json({message:'No user found!'});
        }

        const isValid = bcrypt.compareSync(password, existingUser.password);
        if(!isValid) {
            return res.status(401).json({message:'Incorrect Password'})
        }

        return res.status(200).json({message:'Login sucessfull'});

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
