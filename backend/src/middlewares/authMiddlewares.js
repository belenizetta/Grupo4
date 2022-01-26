import jwt from 'jsonwebtoken';
import asycnHandler from 'express-async-handler';
import User from '../models/userModel.js';
import config from '../config/index.js';

export const protect = asycnHandler(async (req, res, next) => {
    let token;
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, config.jwtSecret);
            console.log(decoded);
            req.user = await User.findById(decoded.id).select('-password');
            console.log(req.user);
            return next();    
        }catch(error){
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');

        }
    }
    if (!token){
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});