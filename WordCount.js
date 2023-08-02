const fs = require('fs');
const { listeners } = require('process');
const fileCount= async()=>{
    let count = 0;
    const data = fs.readFileSync('C:/Users/SRawat/Documents/interviewTask/data.txt','utf-8');
    const length = data.length;
    count=data.match(/(\w+)/g).length;
    console.log(count);
    return length;
};

fileCount().then(res=>console.log(res)).catch(err=>{
    console.log('some error occured',err);
})