const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = passport => {

    passport.serializeUser(function( user, done ){
        console.log("serialized");
        done( null, user );
    });
    passport.deserializeUser(function( id, done ){
        console.log("deserialized");
        User.findById(id, (err, user) => {
            done( false, user );
        })
    });
    passport.use('local.signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => {
        User.findOne({ 'email' :  email }, (err, user) => {
            if ( err )
            
                return done( err );
            if ( user )
                return done( null, false );

            const email = req.body.email;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            const city = req.body.city;
            const street = req.body.street;
            const companyName = req.body.companyName;
            
            req.checkBody('companyName', 'company name is required').notEmpty();
            req.checkBody('street', 'Street is required').notEmpty();
            req.checkBody('city', 'City is required').notEmpty();
            req.checkBody('email', 'Email is required').notEmpty();
            req.checkBody('email', 'Email is not valid').isEmail();
            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('confirmPassword', 'Passwords do not match').equals(password);
            
            const errors = req.validationErrors();
            console.log(errors);
            const newUser = new User();
            newUser.companyName = companyName;
            newUser.street = street;
            newUser.city = city;
            newUser.email = email;
            newUser.password = newUser.encryptPassword( req.body.password );

            if( errors ){ return errors };
            
            newUser.save(function( err ) {
                if ( err )
                    throw err;
                return done( null, newUser );
            });
        });
    }));
    passport.use('local.login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => {
        User.findOne({ 'email' :  email }, (err, user) => {
            
            if (err)
                return done(err);
            if (!user)
                return done(null, false);

            if(!user.validPassword(req.body.password))
                return done(null, false);
            
            return done(null, user);
        });
    }));
};