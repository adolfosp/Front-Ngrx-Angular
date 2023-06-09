import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from "./auth.selectors";
import { IAuthState } from "./reducers";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private store: Store<IAuthState>, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		return this.store.pipe(
			select(isLoggedIn),
			tap((loggedIn) => {
				if (!loggedIn) {
					this.router.navigateByUrl("/login");
				}
			}),
		);
	}
}
