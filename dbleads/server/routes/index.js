const express = require('express');
const router = express.Router();
const MiddleWares = require('../dal/requests');

const getLeads = MiddleWares.getLeads;
const addLeads = MiddleWares.postLeads;
const addCampaign = MiddleWares.addCampaign;
const getUserCampaign = MiddleWares.getUserCampaign;

router.get('/getleads', getLeads, ( req, res ) => { return res.send( req.data ) } );
router.put('/addleads/:id', addLeads, ( req, res ) => { return res.send( req.data ) } );
router.put('/addcampaign', addCampaign, ( req, res ) => { return res.send( req.data ) } );
router.get('/getcampaign', getUserCampaign, ( req, res ) => { return res.send( req.data ) } );

module.exports = router;