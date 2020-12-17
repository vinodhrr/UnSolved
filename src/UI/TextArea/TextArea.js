import React from 'react'
import * as classes from './TextArea.module.css'

const TextArea = props => {
    return (
        <textarea 
        className={classes.TextArea}
        name="question" 
        rows="10" 
        cols="150" 
        autoFocus="true" 
        maxLength="2000" 
        placeholder="Type your Question ..." 
        />
        );
}

export default TextArea