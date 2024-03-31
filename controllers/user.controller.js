import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getUsers = async(req, res) => {
    try {

        const users = await User.find();
        if(!users){
            return res.status(404).json({message:"Sorry you have no users yet!"});
        }

        return res.status(200).json(users);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:'No user found!'});
        }
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        if(req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }

        const user = req.body;

        const isUpdated = await User.findByIdAndUpdate(id,user,{new:true});
        if(!isUpdated){
            return res.status(404).json({message: 'No user found'});
        }

        return res.status(200).json({message:'User updated successfully'});

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteUser = async(req, res) => {
    try {

        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
            return res.status(404).json({message:'No user found!'});
        }

        return res.status(200).json({message: 'User deleted successfully.'});

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
