const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
    userId: String,
    campaignName: String,
});

const Campaigns = mongoose.model('campaigns', CampaignSchema);
module.exports = Campaigns;
