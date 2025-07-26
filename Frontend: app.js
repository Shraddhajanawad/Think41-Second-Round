import React, {useState} from 'react';
import axios from 'axios';
function App(){
  const[response, setResponse]=useState(");
const fetchTopProducts=async()=>{
  const res=await axios.get('/top-products');
  setResponse(JSON.stringfy(res.data,null,2));
};
  const fetchOrderStatus=async()=?{
    const res=await axios.get('/top-status/12345');
    setResponse(JSON.stringfy(res.data,null,2));
};
const fetchStock=async()=>{
  const res=await axios.get('/stock/classic-tshirts');
  setResponse(JSON.stringfy(res.data,null,2));
};
return(
  <div style={{padding:20}}>
<h1>Customer Support Chatbot (Mock)</h1>
<button onClick=(fetchTopProducts)>Top 5 Sold Products</button>
<button onClick={fetchOrderStatus)>Order Status (12345)</button>
<button onClick={fetchStock}>Stock of Classic T-Shirts</button>
<pre>{response}</pre>
  </div>
);
}
export default App;



