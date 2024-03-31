import Restaurant from "../models/restaurent.model.js";

export const addRestaurent = async(req, res) => {
    try {
        const {title, restaurentAddress} = req.body;
        if(!title || !restaurentAddress){
            return res.status(400).json({message:"You can't leave mandatory fields blank!"});
        }

        const newRestaurent = new Restaurant(req.body);
        await newRestaurent.save();

        return res.status(201).json(newRestaurent);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}