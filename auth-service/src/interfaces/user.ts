export interface IUser {
    email: string;
    password: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}