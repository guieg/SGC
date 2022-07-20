const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require('./db');

module.exports = function(passport) {
    passport.use(
      new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Match user
          const connection = db.connect();
          let user = connection.query('SELECT * FROM usuarios WHERE `email` =' + db.mysql.escape(email))[0];
          if (!user) {
            return done(null, false, { message: 'Email não registrado.' });
          }
  
          
  
          // Match password
          bcrypt.compare(password, user.senha, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Senha Incorreta.' });
            }
          });

      })
    );
  
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
  
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
  };