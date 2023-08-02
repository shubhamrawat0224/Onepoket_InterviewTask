const express = require('express');
const bp = require("body-parser");
const app = express();

app.use(bp.json());

app.get('/',(req,res)=>{
    res.send('Hello, World!')
})

app.post('/sum',async (req,res)=>{
    try{
        let arr = req.body.arr;
        let sum = 0;
        console.log(arr);
        for(let i=0;i<arr.length;i++){
            sum = sum+arr[i];
        }
        console.log(sum);
        return res.send('thanks')
    }
    catch(err){
        console.log('error is :-',err);
    }
})
app.listen(3000,()=>{
    try{
        console.log('connected to server http://localhost:3000')
    }
    catch(err){
        console.log(err);
    }
    
})