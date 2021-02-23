import * as actionTypes from '../actions/actionTypes';

const initialState={
    player1_name:'',
    player2_name:'',
    winner:''
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.DATA_STORE:
            return{
                ...state,
                player1_name:action.name1,
                player2_name:action.name2
            }
        case actionTypes.WINNER_DATA:
            alert(action.winner);
            return{
                ...state,
                winner:action.winner
          
            }
        default:
            return state
    }
}



export default reducer;