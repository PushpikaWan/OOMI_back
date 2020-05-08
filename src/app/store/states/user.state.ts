import { User } from '../../models/models';


export interface UserState {
  userData: User;
  isUserLoggedIn: boolean;
  error: string;
}

export const initialUserState: UserState = {
  userData: { uid: null, email: null },
  isUserLoggedIn: false,
  error: null
};
