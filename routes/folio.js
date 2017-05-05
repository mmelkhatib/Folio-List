var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://mmelkhatib:Evasive8!@ds131151.mlab.com:31151/mmelkhatib_folio', ['folio']);


//Get All Folio Items

router.get('/folio', function(req, res, next) {
    db.folio.find(function(err, items) {
        if (err) {
            res.send(err);
        }
        res.json(items);

    });

});

//Get Single Folio Item
router.get('/folio/:id', function(req, res, next) {
    db.folio.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);

    });

});

//Save Folio Item //

router.post('/folio', function(req, res, next) {
    var folio = req.body;
    if (!folio.title || !(folio.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.folio.save(folio, function(err, item) {
            if (err) {
                res.send(err);
            }
            res.json(item);
        });
    }

});

//Delete Folio Item //

router.delete('/folio/:id', function(req, res, next) {
    db.folio.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);

    });

});

//Update//

router.put('/folio/:id', function(req, res, next) {
  var folio = req.body;
  var updFolio = {};

  if(folio.isDone){
    updFolio.isDone = folio.isDone;
  }
  if(folio.title){
    updFolio.title = folio.title;
  }

if(!updFolio){
  res.status(400);
  res.json({
    "error" : "Bad Data"
  })
} else {
  db.folio.update({
      _id: mongojs.ObjectId(req.params.id)
  }, updFolio, {}, function(err, item) {
      if (err) {
          res.send(err);
      }
      res.json(item);

  });
}


});

module.exports = router;
