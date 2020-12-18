import React from 'react'
import classes, * as css from './QuestionSummary.module.css'
import Categories from '../Categories/Categories'

class QuestionSummary extends React.Component{

    state={
        
    }

    render(){
        return(
        <div className={classes.QuestionSummary}>
            <div>
                <Categories />
            </div>
        </div>
        );
    }
}

export default QuestionSummary