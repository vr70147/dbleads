const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    companyName: { type: String },
    street: { type: String },
    city: { type: String },
    email: { type: String, match: [/\S+@\S+\.\S+/, 'is invalid']},
    password: { type: String },
    confirmPassword: { type: String },
});

UserSchema.methods.encryptPassword = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

UserSchema.methods.validPassword = function(candidatePassword){
    if(this.password != null) {
        return bcrypt.compareSync(candidatePassword, this.password);
    }
    else {
        return false
    };
};


const User = mongoose.model('users', UserSchema); 
module.exports = User;