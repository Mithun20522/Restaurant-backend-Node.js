import Order from "../models/order.model.js";

export const createOrder = async(req, res) => {
    try {
        const {items, totalcost, restaurentId} = req.body;
        if(!items || !totalcost || !restaurentId){
            return res.status(400).json({message:"You can't leave mandatory fields blank!"});
        }
        const newOrder = new Order({
            items,
            totalcost,
            restaurentId
        });

        await newOrder.save();
        return res.status(201).json(newOrder);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}