import React from 'react'
import * as classes from './Toolbar.module.css'

const Toolbar = props => {
    return (<div className={classes.Toolbar}>
        <div className={classes.MenuIcon} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
        </div>
        {props.children}
        
    </div>);
}

export default Toolbar