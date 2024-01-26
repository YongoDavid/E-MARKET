// replace with account model here 
const Accounts = require('../model/accountsModel')
const jwt = require('jsonwebtoken')

// creating token function 
const createToken = (id) => {
    return jwt.sign({id} , process.env.TOKEN_SECRET , {expiresIn:"24h"})
}

// handles user signup function 

exports.signUp = async (req ,res) => {
    const {Name , Email , password , ConfirmPassword } = req.body

    try{

        const user = await Accounts.signUp(Name , Email , password , ConfirmPassword )
        res.status(200).json({message: "Account Created"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// handles user login function 

exports.login = async (req,res) => {
    const {email , password } = req.body

    try {
        const user = await Accounts.login(email , password)
        const token = createToken(user.id)
        res.status(200).json({user , token , message:'user logged in '})
    } catch (error){
        res.status(400).json({error:error.message})
    }
}