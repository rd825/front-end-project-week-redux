import {GET_NOTES, GOT_NOTES, DELETING_NOTE, ADDING_NOTE, ERROR, EDITING_NOTE} from '../actions';

const initialState = {
  getting: false,
  got: false,
  deleting: false,
  adding: false,
  editing: false,
  notes: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {...state, getting: true}
    case GOT_NOTES:
      return {...state, getting: false, got: true, deleting: false, adding: false, notes: action.payload}
    case DELETING_NOTE:
      return {...state, deleting: true}
    case ADDING_NOTE:
      return {...state, adding: true}
    case EDITING_NOTE:
      return {...state, editing: true}
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}