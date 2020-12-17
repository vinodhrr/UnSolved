import React from 'react';
import * as classes from './Button.module.css';

const Button = props => {
    
    let css=classes.Button + " " + classes.Proceed
    if(props.type == 'Cancel')
        css=classes.Button + " " + classes.Cancel

    console.log(css)
    return (
    <button 
    className={css}
    value={props.btnName}>
        {props.btnName}
    </button>);
}

export default Button