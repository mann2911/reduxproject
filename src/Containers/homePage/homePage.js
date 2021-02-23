import React, { Component } from 'react';
import  './homePage.css';
import Logo from '../../images/dice.jfif';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
class homePage extends Component{
    render(){
        return(
            <div className='main'>
               <div>
                   <h1>Welcome To Passes The Pass Game!!!</h1><br/><br/>
                   <div>
                       <Image src={Logo} width="30%" roundedCircle />
                   </div>
                   <br/><br/>
                    <h2>Want To Play A Game... CLick Here..</h2><br/>
                  <Link to="/info"><Button variant="success" size="lg" block>Enter Into The Game... </Button></Link>

               </div>

            </div>
        );
    }
} 

export default homePage;