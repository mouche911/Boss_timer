var express = require('express');
var router = express.Router();

/* GET server boss listing. */
router.get('/:server', function(req, res, next) {
  var server = req.params.server;

  if (req.app.settings.servers.hasOwnProperty(server)) {
    // Pass information to server template
    res.render('server', {
      servers: req.app.settings.servers,
      serverid: server,
      server: req.app.settings.servers[server],
      bosses: req.app.settings.bosses,
      channels: req.app.settings.channels,
      status: req.app.status[server]
    });
  } else {
    res.redirect('/');
    // Preferably with an error.
  }
});

module.exports = router;
