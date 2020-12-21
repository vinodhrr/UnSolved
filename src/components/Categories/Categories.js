import axios from 'axios'
import React, { useEffect, useState} from 'react'
import * as classes from './Categories.module.css'
import {connect} from 'react-redux'

const Categories = props => {
    
    const [Categories, setCategory] = useState({CategoryList: null});
    useEffect(() => {
        props.getCategories()
    }, []);
    if(props.Categories != null && Categories.CategoryList == null)
        setCategory({CategoryList: props.Categories})
    let displayEl = null
    if(Categories.CategoryList != null)
        displayEl=Categories.CategoryList.map((data,index) => <li>{data}</li>)
    return(
    <div className={classes.Categories}>
      {displayEl}
    </div>);
}

const mapStateToProps = state => {
    return{
        Categories : state.Categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories : () => {
                                    axios.get('https://unsolved-766a7-default-rtdb.firebaseio.com/categories.json')
                                    .then((response) => {
                                        dispatch({type: 'GETCATEGORIES', data: response.data})
                                    })
                                    .catch(error => {
                                        console.log("Error -->", error)
                                    })
                                }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)