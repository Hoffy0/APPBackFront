const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session');

//Inicializaciones
const app = express();
require('./database');
require('./passport/local-auth');

// Ajustes Globales

app.set('views', path.join(__dirname, 'views'));
app.set('port' , process.env.PORT || 3000);
app.engine('ejs', engine)
app.set('view engine', 'ejs')


//Iniciar el sv 

app.listen(app.get('port'), () => {
    console.log('El servidor esta en el puerto', app.get('port'));
});

//Mid

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize);
app.use(passport.session());
app.use(session({
    secret: 'mysecretsession',
    resave :false,
    saveUninitialized: false
}));

//Routas
app.use('/', require('./routes/index'));

