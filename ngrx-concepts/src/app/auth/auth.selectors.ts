import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './reducers';

export const selectAuthState = createFeatureSelector<IAuthState>("auth");
//type safety selectors
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn =>!loggedIn
);
