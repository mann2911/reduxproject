import React,{Component} from 'react';
import {connect} from 'react-redux';
class lastPage extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.winner}....wins</h2>
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
export default connect(mapStateToProps)(lastPage);
