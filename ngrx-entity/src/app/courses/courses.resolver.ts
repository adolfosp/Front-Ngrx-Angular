import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot,
} from "@angular/router";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { loadAllCourses } from "./course.action";
import { finalize, first, tap } from "rxjs/operators";

@Injectable()
export class CoursesResolver implements Resolve<any> {
  private loading = false;
	constructor(private store: Store<AppState>) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.store.pipe(
      tap(() => {

        if(!this.loading){
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      first(),
      finalize(() => this.loading = false)
    );
	}
}
