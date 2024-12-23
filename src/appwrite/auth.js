import conf from "../conf/conf";
import { Client, Account, ID} from "appwrite";

// authentication file

// using class for better practices
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);

    }

    // a method to use all appwrite within this wrapper

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                // call another method
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    async login( {email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }

    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            throw error;
        }
    }
}
const authService = new AuthService();

// exporting object instead of class ,so now all methods are accessible using a dot operator 
export default authService;
