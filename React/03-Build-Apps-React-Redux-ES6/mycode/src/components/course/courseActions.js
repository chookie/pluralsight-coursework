'use strict';

'use strict';

import * as types from './courseActionTypes';
import courseApi from '../../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from '../common/ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}


export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course};
}

export function updatedCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        // Could have an action for errors.
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ? dispatch(updatedCourseSuccess(savedCourse))
                  : dispatch(createCourseSuccess(saveCourse));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
