import React from 'react';
import * as classes from './SideMenu.module.css';

const SideMenu = props => {

    console.log("SideMenu props ", props)

    let css=classes.SideMenu + " " + classes.hide
    let content=null

    if(props.show)
    {
        css=classes.SideMenu
        content=null
    }

    console.log(css)

    return (
    <div className={css} >
        <div className={classes.MenuIcon} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
        </div>
        <nav>
        {content}
        </nav>
    </div>
    );
}

export default SideMenu