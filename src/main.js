import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './Containers/homePage/homePage';
import Info from './Containers/info/info';
import Game from './Containers/game/game';
import LastPage from './Containers/lastpage';
class main extends Component{
    render(){
        return(
            <div>

            
            <Route path="/info"  exact component={Info}/>
            <Route path="/game" exact  component={Game}/>
            <Route path="/lastPage" exact component={LastPage}/>
            <Route path="/" exact  component={HomePage}/>


            </div>
        );
    }
}

export default main;