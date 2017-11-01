/**
 * Created by Administrator on 2017/10/31.
 */
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var conn=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root"
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/cha', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var text=req.body.use;
    console.log(text)
    conn.query("SELECT * FROM taobao.sou WHERE name LIKE "+"'%"+text+"%'"+" OR delt LIKE "+"'%"+text+"%'", function(err, data, fields) {  // err 错误  rows形参
        res.send(data);
    });

});
module.exports = router;
