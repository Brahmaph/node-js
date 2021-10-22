
const express=require('express');
const mysql=require('mysql2');

var express = require('express');
var router = express.Router(); //app
var mastertables = require('./mastertables.js');
var mastertables = require('./datatables.js');


var mastertables=require('./routers/pm_get_ticketType');
var app=express();

app.post('/save_priority',mastertables.save_priority);
router.post('/save_reasons',mastertables.save_reasons);
router.post('/save_stage_config',mastertables.save_stage_config);
router.post('/save_stage_master',mastertables.save_stage_master);
router.post('/save_stage_status',mastertables.save_stage_status);
router.post('/save_stage_status_config',mastertables.save_stage_status_config);
router.post('/save_status_master',mastertables.save_status_master);
router.post('/save_task_stage_master',mastertables.save_task_stage_master);
router.post('/save_task_status_type_master',mastertables.save_task_status_type_master);
router.post('/save_taskType',mastertables.save_taskType);
router.post('/save_ticket_status',mastertables.save_ticket_status);
router.post('/save_ticketType',mastertables.save_ticketType);

router.post('/save_pd_company_project_team',datatables.save_pd_company_project_team);
router.post('/save_pd_stage_status_config',datatables.save_pd_stage_status_config);
router.post('/save_pd_task_table',datatables.save_pd_task_table);
router.post('/save_pd_ticket_assigned_team',datatables.save_pd_ticket_assigned_team);

router.get('/pm_get_ticketType',datatables.pm_get_ticketType);
router.get('/pm_get_ticketstatus',datatables.pm_get_ticketstatus);
router.get('/pm_get_tasktype',datatables.pm_get_tasktype);
router.get('/pm_get_task_status_type_master',datatables.pm_get_task_status_type_master);
router.get('/pm_get_task_stage_master',datatables.pm_get_task_stage_master);
router.get('/pm_get_reasons',datatables.pm_get_reasons);
router.get('/pm_get_priority',datatables.pm_get_priority);
router.get('/pm_get_ticketstatus',datatables.pm_get_ticketstatus);
router.get('/pm_get_stage_detail',datatables.pm_get_stage_detail);
router.get('/pm_get_stage_list',datatables.pm_get_stage_list);
router.get('/pm_get_status_master',datatables.pm_get_status_master);
router.get('/pm_get_taskstatus',datatables.pm_get_taskstatus);
router.get('/pm_get_ticketType',datatables.pm_get_ticketType);


module.exports = router;

