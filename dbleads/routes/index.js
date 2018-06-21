const express = require('express');
const router = express.Router();
const MiddleWares = require('../dal/requests');

const getLeads = MiddleWares.getLeads;
const postLeads = MiddleWares.postLeads;

router.get('/get-leads', getLeads, ( req, res ) => { return res.send( req.data ) } );
router.put('/post-leads', postLeads, ( req, res ) => { return res.send( req.data ) } );

module.exports = router;