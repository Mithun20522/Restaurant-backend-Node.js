import Order from "../models/order.model.js";

export const createOrder = async(req, res) => {
    try {
        const {items, totalcost, restaurentId, status} = req.body;
        if(!items || !totalcost || !restaurentId || !status){
            return res.status(400).json({message:"You can't leave mandatory fields blank!"});
        }
        const newOrder = new Order({
            items,
            totalcost,
            restaurentId,
            status
        });

        await newOrder.save();
        return res.status(201).json(newOrder);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}