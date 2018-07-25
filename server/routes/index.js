const express = require('express');
const router = express.Router();
const MiddleWares = require('../dal/requests');

const getLeads = MiddleWares.getLeads;
const addLeads = MiddleWares.postLeads;
const addCampaign = MiddleWares.addCampaign;
const getUserCampaign = MiddleWares.getUserCampaign;
const getOneCampaign = MiddleWares.getOneCampaign;
const deleteCampaign = MiddleWares.deleteCampaign;

router.get('/getleads/:id', getLeads, ( req, res ) => { return res.send( req.data ) } );
router.put('/addleads/:id', addLeads, ( req, res ) => { return res.send( req.data ) } );
router.put('/addcampaign', addCampaign, ( req, res ) => { return res.send( req.data ) } );
router.get('/getallcampaigns', getUserCampaign, ( req, res ) => { return res.send( req.data ) } );
router.get('/getonecampaign/:id', getOneCampaign, ( req, res ) => { return res.send( req.data ) } );
router.delete('/deletecampaign/:id', deleteCampaign, ( req, res ) => { return res.send( req.data ) } );

module.exports = router;
