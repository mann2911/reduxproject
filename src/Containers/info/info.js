import React,{Component} from 'react';
import './info.css';
import {connect} from 'react-redux';
import Player from '../../images/player.jpg'
import Image from 'react-bootstrap/Image';
import Dropzone from '../../Components/dropzone/dropzone';
import ReactSelect from '../../Components/reactSelect/reactSelect';
import infoReducer from '../../store/reducers/info';
import * as actions from '../../store/actions/index';
import {Redirect,Link} from 'react-router-dom';
class Info extends Component{
    
    state={
        p1name:'',
        p2name:'',
        p1data:false,
        p2data:false
    }
    player1Change=(event)=>{
        let copyData=this.state.p1name;
        copyData=event.target.value;
        this.setState({p1name:copyData})
     
        
    }
    player2Change=(event)=>{
        let copyData=this.state.p2name;
        copyData=event.target.value;
        this.setState({p2name:copyData})
     
        
    }
   
    dataHandler=()=>{
     
        this.setState({p1data:true,p2data:true})
       
        this.props.dataStore(this.state.p1name,this.state.p2name);
        
    }
   
    
    
    render(){
        const options=[
            {value:'India',label:'India'},
            {value:'Australia',label:'Australia'},
            {value:'US',label:'US'},
            {value:'UK',label:'UK'},
            {value:'Brazil',label:'Brazil'},
            {value:'Canada',label:'Canada'},
            {value:'Korea',label:'Korea'},
            {value:'Russia',label:'Russia'},
            {value:'China',label:'China'},
        
        ]
        if(this.state.p1data && this.state.p2data){
            alert("redirect");
          
        }
        return(
            <div className="main">
                 <div className="split left">
                    <div style={{justifyContent:'center'}}>
                        <Image src={Player} roundedCircle width="30%"></Image>
                        <h1>Player 1</h1>
                        <br/>
                        <form >
                            <label><h4>Player 1 Name : </h4></label><br/><input type="text" placeholder="Enter Your Name" name="player1_name" required="required" onChange={this.player1Change}/><br/><br/>
                            <label><h4>Player 1 Photo : </h4></label><Dropzone name="player1"/>
                       
                        <br/>
                        <h4>Player 1 Country : </h4>
                        <ReactSelect  options={options} />
                       
                        </form>
                    </div>
                </div>
                <div className="split right">
                    <div>
                        <Image src={Player} roundedCircle width="30%"></Image>
                        <h1>Player 2</h1>
                        <br/>
                        <form >
                            <label><h4>Player 2 Name : </h4></label><br/><input type="text" placeholder="Enter Your Name" name="player1_name" onChange={this.player2Change}/><br/><br/>
                            <label><h4>Player 2 Photo : </h4></label><Dropzone/>
                        </form>
                        <br/>
                        <h4>Player 2 Country : </h4>
                        <ReactSelect  options={options}/>
                      <Link to="/game">  <button onClick={this.dataHandler}>Submit To Start The Game</button></Link>
                       
                    </div>
                  
                </div>
                
                	<button></button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        player1_name:state.player1_name,
        player2_name:state.player2_name
    }
}

const mapDispatchToProps = dispatch => {
    return {
     
        dataStore:(name1,name2)=>dispatch(actions.DATA_STORE(name1,name2)),
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Info);