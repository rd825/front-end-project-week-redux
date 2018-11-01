import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getNotes, addNote, deleteNote, editNote} from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    return (
      <div className="App">
          {this.props.notes.map(note => <p>{note.title}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    got: state.got
  }
}

export default connect(mapStateToProps, {getNotes, addNote, deleteNote, editNote})(App);