import * as actionTypes from './actionTypes';

export const DATA_STORE=(name1,name2)=>{
    return{
        type:actionTypes.DATA_STORE,
        name1:name1,
        name2:name2
    }
}

export const WINNER_DATA=(winner)=>{
    return{
        type:actionTypes.WINNER_DATA,
        winner:winner
       
    }
}
