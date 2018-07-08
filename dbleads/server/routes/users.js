const express = require('express');
const router = express.Router();
const passport = require('passport');

const isLoggedIn = (req, res, next) => {
	if( req.isAuthenticated ) {
		next();
	}
	else {
		return res.status(200).json( { 'msg' : 'unauthorized user' } );
	}	
};
router.get('/session', isLoggedIn, ( req, res ) => {
	return res.status(200).json( req.session );
});
router.get('/logout', ( req, res ) => {
    req.session.destroy(() => {
        res.json('Thank you and see you soon');
    });
});

router.get('/errors', ( req, res ) => {
	console.log(req.validationErrors());
});

router.post('/register', passport.authenticate('local.signup', {
    failureRedirect: '/users/errors',
    successRedirect: '/users/success'
}));

router.post('/login', passport.authenticate('local.login'),
	((req,res) => {
		if( req.isAuthenticated() ) 
			return res.send( { "user" : req.session.passport.user.companyName } );
		return res.send( { msgError : 'username or password are incorrect' } );
	})
);

module.exports = router;