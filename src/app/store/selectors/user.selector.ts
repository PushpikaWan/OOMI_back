import { User } from '../../models/models';

// export const featureModule = 'userFeature';
// export const getAppCurrentState = createFeatureSelector<AppState, UserState>(featureModule);

export const getIsUserLoggedIn = (state: any): boolean => state.userState.isUserLoggedIn;
export const getUserData = (state: any): User => state.userState.userData;
