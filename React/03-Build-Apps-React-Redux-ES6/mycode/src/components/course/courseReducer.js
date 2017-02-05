'use strict';

import * as types from './courseActionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,
         Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
