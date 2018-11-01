import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

const Note = props => {
    return (
        <Link to={{pathname: `/notes/${props.note._id}`, state: {id: props.note._id}}} >
            <NoteDiv>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
            </NoteDiv>
        </Link>
    )
}

export default Note;