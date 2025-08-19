var express = require('express');
const oracledb = require('oracledb');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ////
  oracledb.getConnection({  
    user: "CENTRAL00",  
    password: "SOFT0101$",  
    connectString: "FSC"  
}, function(err, connection) {  
    if (err) {  
         console.error(err.message);  
         return;  
    }  
    connection.execute( "SELECT * FROM tgen_paises",  
    [],  
    function(err, result) {  
         if (err) {  
              console.error(err.message);  
              //doRelease(connection);  
             // return;  
             res.status(500).send("Error"); 

         }  
        
         console.log(result.metaData);  
         console.log(result.rows);  
         //doRelease(connection);  
         res.render('index', { title: 'Horario' });
    });  
});  
  /////
 // res.render('index', { title: 'Horario' });
});

module.exports = router;
