const passport = require('passport');
const LS = require('passport-local').Strategy;


const User = require('../models/user');

//////////////////////////////////////////////////////////////////////
passport.serializeUser((user, done) => {
    done(null, user.id);
});
//////////////////////////////////////////////////////////////////////
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);

});

////////////////////////////////////////////////////////////////////
passport.use('local-singup', new LS({
    usernameField: 'email',
    passwordField: 'password',
    passReToCallBack: true
}, async (email, password, done) => {
    const user = new User()
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}));
/////////////////////////////////////////////////////////////////////