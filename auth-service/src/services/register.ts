import { User } from '../models'
import { IUser } from '../interfaces';

async function createUser(userData: IUser): Promise<IUser> {
    try {
        const existingUser = await User.findOne({ email: userData.email})
        if (existingUser) {
            throw new Error('User already exists with this email');
        }
        const user = new User(userData);
        return user.save();
    } catch (error:any) {
        throw new Error(`Error while creating user: ${error.message}`);
    }
}

export {
    createUser
}