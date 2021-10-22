const express=require('express');
const bodyParser=require('body-parser');
const db = require('./dbcon.js');
const app = require('./tables.router.js');
app.use(bodyParser.json());
const app=express();


app.get('/pm_get_ticketType',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
   
   var sql=db.query("call pm_get_ticketType(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Ticket type loaded ",  
          list:result[0]
        }
         res.json(response)
        }
   });
});


app.get('/pm_get_ticketstatus',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
   
   var sql=db.query("call pm_get_ticketstatus(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Ticket status loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_tasktype',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
    
   var sql=db.query("call pm_get_taskType(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Task type loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});


app.get('/pm_get_task_status_type_master',function(req,res){
    var status=req.query.status;
    var lngId=req.query.lngId;
    
   var sql=db.query("call pm_get_task_status_type_master(?,?)",[status,lngId],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
          var response={
            message:"Task type master loaded ",  
            list:result[0]
          }
           res.json(response)
           
        }
   });
});

app.get('/pm_get_task_stage_master',function(req,res){
    var code=req.query.code;
    var lngId=req.query.lngId;
    
   var sql=db.query("call pm_get_task_stage_Master(?,?)",[code,lngId],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Task stage master loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_reasons',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
 
   var sql=db.query("call pm_get_reasons(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Reasons loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_priority',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
    
   var sql=db.query("call pm_get_priority(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Priority loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});


app.get('/pm_get_ticketstatus',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
    
   var sql=db.query("call pm_get_ticketstatus(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Ticket status loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});


app.get('/pm_get_stage_detail',function(req,res){
    var companyId=req.query.companyId;
    var code=req.query.code;
   
   var sql=db.query("call pm_get_stage_detail(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Stage detail loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_stage_list',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    
   var sql=db.query("call pm_get_stage_list(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
          var response={
          message:"Stage list loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_status_master',function(req,res){
    var code=req.query.code;
    var lngId=req.query.lngId;
    
   var sql=db.query("call pm_get_status_master(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Status master loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_taskstatus',function(req,res){
    var code=req.query.code;
    var lngId=req.query.lngId;
    
    
   var sql=db.query("call pm_get_taskstatus(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
          var response={
          message:"Task status loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});

app.get('/pm_get_ticketType',function(req,res){
    var companyId=req.query.companyId;
    var lngId=req.query.lngId;
    var status=req.query.status;
  
   var sql=db.query("call pm_get_ticketType(?,?,?)",[companyId,lngId,status],function(err,result,fields){
       if(err){
           throw err;
       }
       else{
        var response={
          message:"Ticket type loaded ",  
          list:result[0]
        }
         res.json(response)
         
      }
   });
});




//const app=express(); 

app.post('/save_ticket_type',function(req,res){
   console.log(req.body);
    var data=JSON.stringify(req.body)
    var input=[ db.escape(data)] 
    var sql='CALL pm_save_ticketType('+ input.join(',') + ')';
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

app.post('/save_ticket_status',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_ticket_status('+ input.join(',') + ')';
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

 app.post('/save_task_type',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_taskType('+ input.join(',') + ')';
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
 
 app.post('/save_task_status_type_master',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_task_status_type_master('+ input.join(',') + ')';
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
 
 app.post('/save_task_stage_type_master',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_task_stage_master('+ input.join(',') + ')';
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

 app.post('/save_reasons',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_reasons('+ input.join(',') + ')';
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

 app.post('/save_priority',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_priority('+ input.join(',') + ')';
     console.log(sql);
     db.query(sql,function(err,result,fields){
        if(err){
            throw err;
        }
        else{
               
                res.json(result[0][0])
            
             }
            
    });
 });
 
 app.post('/save_stage_status',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_stage_status('+ input.join(',') + ')';
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
 
 app.post('/save_status_master',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_status_master('+ input.join(',') + ')';
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

 app.post('/save_stage_status_master',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_stage_status_config('+ input.join(',') + ')';
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

 app.post('/save_stage_master',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_stage_master('+ input.join(',') + ')';
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

 app.post('/save_stage_config',function(req,res){
    console.log(req.body);
     var data=JSON.stringify(req.body)
     var input=[ db.escape(data)] 
     var sql='CALL pm_save_stage_config('+ input.join(',') + ')';
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
 