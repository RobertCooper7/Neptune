var express = require('express');
var router = express.Router();
var multer= require('multer');
var upload = multer({ storage : storage}).single('userPhoto');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get Fluigi Page
router.get('/fluigipage', function(req, res, next) {
  res.render('fluigipage', { title: 'Fluigi Page' });
});

// Store Files
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

router.get('/fluigipage',function(req,res){
  res.sendFile(__dirname + "/public/uploads");
});

router.post('/api/photo',function(req,res){
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});


module.exports = router;

