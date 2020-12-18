import React from 'react'
import * as classes from './Categories.module.css'
import {connect} from 'react-redux'

const Categories = props => {
    return(<div>
        Python
        React Js
    </div>);
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)