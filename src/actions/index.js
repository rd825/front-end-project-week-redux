import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const DELETING_NOTE = 'DELETING_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDITING_NOTE = 'EDITING_NOTE';
export const ERROR = 'ERROR';


export const getNotes = () => {
    return dispatch => {
        dispatch({type: GET_NOTES});
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
             .then(res => dispatch({type: GOT_NOTES, payload: res.data}))
             .catch(err => dispatch({type: ERROR, payload: err}))
    }
}

export const addNote = note => {
    return dispatch => {
        dispatch({type: ADDING_NOTE});
        axios.post('https://fe-notes.herokuapp.com/note/create', note)
             .then(res => dispatch({type: GOT_NOTES, payload: res.data}))
             .catch(err => dispatch({type: ERROR, payload: err}))
    }
}

export const deleteNote = id => {
  return dispatch => {
    dispatch({type: DELETING_NOTE});
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(res => dispatch({type: GOT_NOTES, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err}))
  }
}

export const editNote = (note, id) => {
  return dispatch => {
    dispatch({type: EDITING_NOTE});
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
         .then(res => dispatch({type: GOT_NOTES, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err})) 
  }
}