const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    campaign: { type: Schema.Types.ObjectId, ref: 'campaigns' },
    creationDate: { type: Date, default: Date.now },
    fname: { type: String },
    lname: { type: String },
    fullname: { type: String },
    email: { type: String, match: [/\S+@\S+\.\S+/, 'is invalid']},
    phone: { type: String },
    city: { type: String },
    street: { type: String },
    street_num: { type: Number },
    address: { type: String },
    country: { type: String },
    gender: { type: String },
    birth: { type: Date },
    agree: { type: Boolean },
    age: { type: Number },
    comment: { type: String },
    source: { type: String },    
});
const Leads = mongoose.model('leads', leadSchema); 
module.exports = Leads;