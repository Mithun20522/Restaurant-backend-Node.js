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

export const getAllOrders = async(req, res) => {
    try {
        const orders = await Order.find();
        if(!orders){
            return res.status(404).json({message:'You have no order yet!'})
        }
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const updateOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body, {new:true});
        if(!order){
            return res.status(404).json({message: 'No order found!'});
        }
        return res.status(200).json({message:'Order updated successfully'});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const deleteOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findByIdAndDelete(id);
        if(!order){
            return res.status(404).json({message: 'No order found!'});
        }
        return res.status(200).json({message:'Order deleted successfully'});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}
