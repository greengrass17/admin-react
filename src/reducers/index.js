import {
  REQUEST_USER,
  RECEIVE_USER
} from '../actions';

const initialState = {
  user: {},
  groups: []
}

function mercuryApp(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        user: action.user
      })
    case 'RECEIVE_GROUPS':
      return  Object.assign({}, state, {
        groups: action.groups
      })
    default:
      return state

  }
}

export default mercuryApp;
