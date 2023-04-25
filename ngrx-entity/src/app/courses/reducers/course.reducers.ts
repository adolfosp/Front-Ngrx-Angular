import { createReducer, on } from "@ngrx/store";
import { Course } from "../model/course";
import {EntityState, createEntityAdapter} from "@ngrx/entity"
import { CourseActions } from "../action-types";

export interface CoursesState extends EntityState<Course>{
  entities: {[key: number]: Course},
  ids: number[]
}

export const adapter = createEntityAdapter<Course>();

export const initialCourseState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, state))
);
