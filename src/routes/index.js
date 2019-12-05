const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

router.get('/singup', (req, res, next) => {
    res.render('singup')
});

router.post('/singup', passport.authenticate('local-singup'), {
    succesRedirect: '/',
    faildureRedirect: '/singup'
});

router.get('/singin', (req, res, next) => {

});

router.post('/singin', (req, res, next) => {

});
module.exports = router;