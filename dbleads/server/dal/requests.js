const express = require('express');
const Leads = require('../models/leads');
const User = require('../models/user');
const Campaigns = require('../models/campaign');


const getLeads = ( req, res, next ) => {
    Leads.find({}, ( err, leads ) => {
        if(err) return err;
        res.json( leads );
        return next();
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
        return next();
    });
}
const addCampaign = (req, res, next ) => {
    const campaigns = new Campaigns({
        "userName" : req.session.passport.user.companyName,
        "campaignName": req.body.campaignName
    });
    Campaigns.findOne({ campaignName: req.body.campaignName }, ( err, existingName ) => {
        console.log(existingName);
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

const getUserCampaign = ( req, res, next ) => {
    const userId = req.session.passport.user._id;
	Campaigns.find({ userId: userId }, ( err, campaign ) => {
		if (err){ return console.log(err)};
		res.status(200).json(campaign);
	});
};


const MiddleWares = {
    getLeads,
    postLeads,
    addCampaign,
    getUserCampaign
};

module.exports = MiddleWares;
