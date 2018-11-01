import React, {Component} from 'react';
import Note from './Note';

import {connect} from 'react-redux';
import {getNotes} from '../actions';
import styled from 'styled-components';

const NotesDiv = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

class Notes extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <NotesDiv>
                {this.props.notes.map(note => <Note key={note._id} note={note} />)}
            </NotesDiv>
        );
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
    }
  }
  
export default connect(mapStateToProps, {getNotes})(Notes);