const express=require('express');
const bodyParser=require('body-parser');
const db = require('./dbcon.js');
app.use(bodyParser.json());
const app=express();

app.post('/save_pd_company_project',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pd_save_company_project_team('+ input.join(',') + ')';
     console.log(sql);
     db.query(sql,function(err,result,fields){
        if(err){
            throw err;
        }
        else{
          res.json(result[0][0]);  
        }
            
    });
 });

app.post('/save_pd_stage_status_config',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pd_save_stage_status_config('+ input.join(',') + ')';
     console.log(sql);
     db.query(sql,function(err,result,fields){
        if(err){
            throw err;
        }
        else{
          res.json(result[0][0]);  
        }
            
    });
 });

 app.post('/save_pd_task_table',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pd_save_task_table('+ input.join(',') + ')';
     console.log(sql);
     db.query(sql,function(err,result,fields){
        if(err){
            throw err;
        }
        else{
          res.json(result[0][0]);  
        }
            
    });
 });

app.post('/save_pd_ticket_assigned_team',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pd_save_ticket_assigned_team('+ input.join(',') + ')';
     console.log(sql);
     db.query(sql,function(err,result,fields){
        if(err){
            throw err;
        }
        else{
          res.json(result[0][0]);  
        }
            
    });
 });

app.listen(5000);
