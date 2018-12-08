import { IUser } from '../user';

export interface IUserState {
    user?: IUser;
    isFetchingLogin?: boolean;
    isLoginError?: boolean;
    isFetchingRegistration?: boolean;
    isRegistrationError?: boolean; 
    isRegistrationSuccess?: boolean;
}