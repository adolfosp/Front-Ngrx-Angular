import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>("auth");
//type safety selectors
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn =>!loggedIn
);
