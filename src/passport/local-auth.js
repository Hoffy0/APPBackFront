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
passport.use('local-signup', new LS({
    usernameField: 'email',
    passwordField: 'password',
    passReToCallBack: true
}, async (req, email, password, done) => {
const user = await User.findOne({'email': email})
console.log(user)
if(user) {
  return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
 } else {
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptarPass(password);
console.log(newUser)
   await newUser.save();
   done(null, newUser);
 }
}));
/////////////////////////////////////////////////////////////////////