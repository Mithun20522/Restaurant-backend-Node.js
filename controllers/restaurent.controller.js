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

export const getRestaurents = async(req, res) => {
    try {
        const restaurents = await Restaurant.find();
        if(!restaurents){
            return res.status(404).json({message:'You have no restaurents yet!'});
        }

        return res.status(200).json(restaurents);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const updateRestaurent = async(req, res) => {
    try {
        const {id} = req.params;
        const restaurent = await Restaurant.findByIdAndUpdate(id,req.body,{new:true});
        if(!restaurent){
            return res.status(404).json({message:'No restaurent found!'});
        }

        return res.status(200).json({message:'Restaurent Updated successfully.',restaurent});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const deleteRestaurent = async(req, res) => {
    try {
        const {id} = req.params;
        const restaurent = await Restaurant.findByIdAndDelete(id);
        if(!restaurent){
            return res.status(404).json({message:'No restaurent found!'});
        }

        return res.status(200).json({message:'Restaurent deleted successfully.'});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}