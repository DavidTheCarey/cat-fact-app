var express = require('express');
var router = express.Router();

const ROOT_URL = "https://catfact.ninja";

router.get('/', function(req, res, next) {
      let userData;
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(userInfo => {
      userData = userInfo.fact;
      res.render("cats/fact", { 
        title: "Random Cat Fact",
        factInfo: userData
     })
    })
});

  module.exports = router;