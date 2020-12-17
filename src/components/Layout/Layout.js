import React from 'react';
import SideMenu from '../../UI/SideMenu/SideMenu'
import Toolbar from '../../UI/Toolbar/Toolbar';
import * as classes from './Layout.module.css'
import SearchBar from '../../UI/SearchBar/SearchBar'

class Layout extends React.Component {

    state={
        displaySideDrawer : false
    }

    ToggleSideDrawer = props => {
        this.setState((prevState)=>({
            displaySideDrawer : !this.state.displaySideDrawer
        }));
    }
    render(){
       return(<div className={classes.Layout}>
           <Toolbar click={this.ToggleSideDrawer}>
               <SearchBar placeholder="Search for a Question..."/>
            </Toolbar>
           <SideMenu show={this.state.displaySideDrawer} click={this.ToggleSideDrawer}/>
           <main className={classes.Main}>
           {this.props.children}
           </main>
       </div>); 
    }

}

export default Layout