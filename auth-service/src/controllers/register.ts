import { createUser } from '../services/register';
import { Request, Response } from 'express';

async function registerController (req: Request,res: Response) {
    const {email, password } = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({message: 'Email and password are required'});
        }
        const user = await createUser({email, password});
        if (!user) {
            return res.status(400).json({message: 'Error while creating user'});
        }

        res.status(201).json({message: 'User created successfully', user});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
}

export {
    registerController
}