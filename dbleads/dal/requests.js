const express = require('express');
const Leads = require('../models/lead');

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

const MiddleWares = {
    getLeads,
    postLeads
};

module.exports = MiddleWares;
