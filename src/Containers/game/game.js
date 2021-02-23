import React,{Component} from 'react';
import {connect} from 'react-redux';
import './game.css';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
class Game extends Component{
    state={
        num:0,
        count:0,
        player:1,
        p1Points:0,
        p2Points:0,
        total:50,
        winner:'',
        gameClosed:false
    }
    
    clicked=()=>{
        let num=Math.floor(Math.random() * 10);
        let count=this.state.count;
        count=count+1;
        let player=this.state.player;
        if(count%2===0){
            player=1;
            let points=this.state.p2Points;
            points=points+num;
            if(points>50){
                this.setState({winner:2,gameClosed:true})
             
                console.log(this.props);
            //    <Redirect to="/lastPage"/>
            this.props.storeReducer('player 2');
                this.props.history.push('/lastPage');
               
              
            }
            else{
                this.setState({p2Points:points});              
            }
            
        }
        else{
            player=2;
            let points=this.state.p1Points;
            points=points+num;
            if(points>50){
                this.setState({winner:1,gameClosed:true})
                // alert('Player 1 is winner');
                console.log(this.props);
            //    <Redirect to="/lastPage"/>
            this.props.storeReducer('player 1');   
                this.props.history.push('/lastPage');  
              

              }
            else{
                this.setState({p1Points:points});
            }
        }
        this.setState({num:num,count:count,player:player});
    }
    
    render(){
        let winner='';
        if(this.state.gameClosed){
            winner=<h4>Winner Of the Game is Player {this.state.winner}</h4>
        }
        
        return(
            <div className="main">
                    <h1>Welcome to the Game ...</h1><br/><br/>
                    <h4>Player who reach to 50 points...wins..</h4><br/>
                
                
              <div className="sample1"> 
                    <div>
                       <h3 style={{textTransform:'uppercase'}}>{this.props.player1_name}</h3><br></br>
                       <h4>Points : {this.state.p1Points}</h4>
                    </div>
                </div>
                <div className="sample2"> 
                     <div>
                       <h3 style={{textTransform:'uppercase'}}>{this.props.player2_name}</h3><br/>
                       <h4>Points : {this.state.p2Points}</h4> 
                     </div>
                </div><br/><br/><br/><br/><br/><br/>
                <hr/>
                <div > 
                    <span><h3>Player {this.state.player} Turn </h3></span><br/>
                    <Button variant="primary" size="lg" block onClick={this.clicked}>Click to Spin!!!!</Button><br></br>
                    <span><h4>{this.state.num}</h4></span><br/><br/>
                    {winner}
                </div>
           
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        player1_name:state.player1_name,
        player2_name:state.player2_name,
        winner:state.winner
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        storeReducer:(winner)=>dispatch(actions.WINNER_DATA(winner)),
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));