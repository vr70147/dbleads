const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    fname: String,
    lname: String,
    fullname: String,
    email: String,
    phone: String,
    city: String,
    street: String,
    street_num: Number,
    address: String
});
const Leads = mongoose.model('leads', leadSchema); 
module.exports = Leads;