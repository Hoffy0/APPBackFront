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
    faildureRedirect: '/singup',
    passReqToCallBack: true
});

router.get('/singin', (req, res, next) => {

});

router.post('/singin', (req, res, next) => {

});

router.get('/profile', (req, res, next) => {
    res.render('profile');
})
module.exports = router;