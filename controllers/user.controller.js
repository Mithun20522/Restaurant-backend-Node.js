import User from '../models/user.model.js';

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
