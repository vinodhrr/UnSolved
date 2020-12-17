import React from 'react';
import * as classes from './SearchBar.module.css';

const SearchBar = props => {
    return(
    <input type="text" placeholder={props.placeholder} className={classes.SearchBar}/>
    );
}

export default SearchBar