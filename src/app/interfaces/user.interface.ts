export interface User {
    createdLists?: string;
    email: string;
    firstName?:string;
    lastName?:string;
    pwd: string;
    signedLists?: string;
    userID: string;
}