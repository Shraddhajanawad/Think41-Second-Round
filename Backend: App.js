//Backend
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce',{
useNewUrlParser:true,
useUnifiedTopology:true
});

const Product=mongoose.model('Product',{
name:String,
stock:Number,
sold:Number
});

const Order=mpngoose.model('Order',{orderId:String,status:String});
app.get('/top-products', async(req, res)=>{
const products=await Product.find().sort({sold:-1}).limit(5);
res.json(products);
});
app.get('/order-status/:id",async(req,res)=>{
const order=await Order.findOne({orderId:req.params.id});
res.json(order?order:{message:"Order not found"});
});

app.get('/stock/classic-tshirts;,async(req, res)=>{
const product=await Product.findOne({name:/Classic T/i});
res.json({stock.product?product.stock:0});
});

app.listen(5000, () =>{
console.log('Server running on port 5000');
});

