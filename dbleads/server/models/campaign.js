const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
    userName: String, 
    campaignName: String,
    leads: { type: Schema.Types.ObjectId, ref: 'leads'}
});

const Campaigns = mongoose.model('campaigns', CampaignSchema); 
module.exports = Campaigns;