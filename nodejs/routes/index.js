var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/login', function (req, res, next) {
    res.json({
        id: 1,
        name: '张三',
        age: 18
    });
});

module.exports = router;
