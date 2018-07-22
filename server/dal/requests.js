const express = require('express');
const Leads = require('../models/leads');
const User = require('../models/user');
const Campaigns = require('../models/campaign');

const getLeads = ( req, res, next ) => {
    const id = req.params.id;
    Leads.find({ campaign: id }, ( err, leads ) => {
        if( err ) return err;
        res.json( leads );
    });
};

const postLeads = ( req, res, next ) => {
    const campaignId = req.params.id;
    const leads = new Leads({
        fname: req.body.fname,
        lname: req.body.lname,
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        street: req.body.street,
        street_num: req.body.street_num,
        address: req.body.address,
        campaign: campaignId
    });
    leads.save(( err, data ) => {
        if(err) return err;
        res.json( data );
    });
}
const addCampaign = (req, res, next ) => {
    const campaigns = new Campaigns({
        "userId" : req.session.passport.user._id,
        "campaignName": req.body.campaignName
    });
    Campaigns.findOne({ campaignName: req.body.campaignName }, ( err, existingName ) => {
        if( existingName ) {
            return res.send("this campaign name is already exist");
        }
        campaigns.save(( err, campaigns ) => {
            if(err) return err;
            res.json( campaigns );
            return next();
        });
    });
};

const getUserCampaign = async ( req, res ) => {
    if (req.session.passport) {
        const userId = req.session.passport.user._id;
        let campaign = await Campaigns.find({ userId: userId });
        res.json( campaign );
    }
};

const countLeads = async ( req, res ) => {
    let arr = [];
    let arrOfName = await Leads.find({ });
    arr = arrOfName.length;
    res.json(arr);
    // let getLeads = await Leads.find({});
    // res.json(getLeads);
}
const getOneCampaign = async ( req, res ) => {
    const id = req.params.id;
    let campaignID = await Campaigns.findOne({_id: id})
    res.json( campaignID.campaignName )
}
const MiddleWares = {
    getLeads,
    postLeads,
    addCampaign,
    getUserCampaign,
    getOneCampaign,
    countLeads
};

module.exports = MiddleWares;
