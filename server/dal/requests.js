const express = require('express');
const Leads = require('../models/leads');
const User = require('../models/user');
const Campaigns = require('../models/campaign');
const mongoose = require('mongoose');

const getLeads = ( req, res, next ) => {
    const id = req.params.id;
    Leads.find({ campaign: id }, ( err, leads ) => {
        if( err ) return err;
        res.json( leads );
    });
};

const addCampaign = (req, res, next ) => {
    const campaigns = new Campaigns({
        _id: new mongoose.Types.ObjectId(),
        userId : req.session.passport.user._id,
        campaignName: req.body.campaignName
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
const postLeads = ( req, res, done ) => {
    const id = req.params.id;
    const leads = new Leads({
        campaign: id,
        fname: req.body.fname,
        lname: req.body.lname,
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        street: req.body.street,
        street_num: req.body.street_num,
        address: req.body.address,
    });
    leads.save(( err, data ) => {
        Campaigns.update({ _id: data.campaign }, { $push: { lead: data }}, done );
        if(err) return err;
        res.json( data );
    });
}

const getUserCampaign = async ( req, res ) => {
    if ( req.session.passport ) {
        const userId = req.session.passport.user._id;
        let campaign = await Campaigns.find({ userId: userId });
            res.json( campaign );
    }
};

const countLeads = async ( req, res ) => {
    let arr = [];

    let arrOfNames = await Leads.find({ });
    arr = arrOfName.length;
    res.json(arr);
    // let getLeads = await Leads.find({});
    // res.json(getLeads);
}
const getOneCampaign = async ( req, res ) => {
    const id = req.params.id;
    let campaignID = await Campaigns.findOne({_id: id});
    res.json( campaignID.campaignName );
}

const deleteCampaign = async ( req, res ) => {
    console.log("ok");
    const id = req.params.id;
    Campaigns.remove({ _id: id }),( err, deleted ) => {
        console.log('Campaign has deleted successfuly');
    };
};
const MiddleWares = {
    getLeads,
    postLeads,
    addCampaign,
    getUserCampaign,
    getOneCampaign,
    countLeads,
    deleteCampaign
};

module.exports = MiddleWares;
