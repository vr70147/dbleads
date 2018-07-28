const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
    userId: { type: String },
    creationDate: { type: Date ,default: Date.now() },
    campaignName: { type: String },
    campaignLink: { type: String },
    lead: [
        { type: Schema.Types.ObjectId, ref: 'leads' }
    ]
});

const Campaigns = mongoose.model('campaigns', CampaignSchema);
module.exports = Campaigns;
