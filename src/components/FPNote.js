import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteNote} from '../actions';
import {Redirect} from 'react-router-dom';

const NoteDiv = styled.div`
    margin: 20px;
    width: 300px;
    height: 200px;
    padding: 20px;
    background: paleturquoise;
    overflow: hidden;
    border-radius: 3px;
    word-wrap: break-word;
`

class FPNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            deleted: false,
        }
    }

    componentDidMount() {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.location.state.id}`)
             .then(res => {
                 this.setState({
                     note: res.data,
                     deleted: false,
                 })
                console.log(res.data);
             })
             .catch(err => console.dir(err))
    }

    delete = id => {
        console.log('delete fired');
        this.props.deleteNote(id);
    }

    render() {
        if (this.state.deleted === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        
        if (this.state.note !== null) {
            return (
                <NoteDiv>
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                    <span onClick={() => this.delete(this.props.location.state.id)}> X </span>
                </NoteDiv>
        )}
        else {
            return (
                <div>Loading note...</div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
    }
  }
  
export default connect(mapStateToProps, {deleteNote})(FPNote);