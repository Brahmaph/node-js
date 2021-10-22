const express=require('express');
const app=express();
const mysql=require('mysql2');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'node',
    password:'node@123',
    database:'abc',
    multipleStatements:true
})

db.connect((err)=>{
if(err) {
    throw err;
}
else 
{
console.log('mysql connected successfully');
}
});

app.listen(5000);
module.exports=db;