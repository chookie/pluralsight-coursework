'use strict';

import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
import {EventEmitter} from 'events';

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log("3. In LinkStore");
          _links = action.links;
          this.emit("change");
          break;
        default:
          // Do Nothing
      }
    });
  }

  getAll() {
    return _links;
  }
}

// Export instance of class
export default new LinkStore();
