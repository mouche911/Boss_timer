var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    servers: req.app.settings.servers,
    bosses: req.app.settings.bosses
  });
});

/* POST server request */
router.post('/', function(req, res, next) {
  var success = false;

  var server = req.body.hasOwnProperty('server') ? req.body.server : null;

  if (req.app.settings.servers.hasOwnProperty(server)) {
    success = true;
  }

  if (success) {
    // redirect to requested server page
    res.redirect('/server/' + server);
  }
  else {
    // refresh with error
    res.render('index', { servers: req.app.settings.servers });
  }
});

module.exports = router;
