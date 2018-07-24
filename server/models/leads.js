const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    campaign: { type: String, required: true },
    campaigns: { type: Schema.Types.ObjectId, ref: 'campaigns' },
    fname: String,
    lname: String,
    fullname: String,
    email: { type: String, match: [/\S+@\S+\.\S+/, 'is invalid']},
    phone: String,
    city: String,
    street: String,
    street_num: Number,
    address: String
    
});
const Leads = mongoose.model('leads', leadSchema); 
module.exports = Leads;