const express = require('express')
const router = express.Router()
const accounts = require('../controllers/accountController')


router.post('/auth/signup', (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    accounts.signUp(req, res);
});


router.post('/auth/signup' , accounts.signUp)
router.post('/auth/login' , accounts.login)

module.exports = router