import { getAppCurrentState } from '../states/app.state';
import { User } from '../../models/models';


export const getIsUserLoggedIn = (state: any): boolean => getAppCurrentState(state).userState.isUserLoggedIn;
export const getUserData = (state: any): User => getAppCurrentState(state).userState.userData;
