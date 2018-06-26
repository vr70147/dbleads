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
    console.log(req.body);
    const leads = new Leads( req.body );
    leads.save(( err, data ) => {
        if(err) return err;
        res.json( data );
        return next();
    });
};
const addCampaign = (req, res, next ) => {
        const campaigns = new Campaigns({
            "userId" : req.session.passport.user._id,
            "campaignName": req.body.campaignName
        });
        campaigns.save(( err, campaigns ) => {
            if(err) return err;
            res.json( campaigns );
            return next();
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
