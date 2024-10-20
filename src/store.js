import { combineReducers, createStore } from "redux"

const  bank={
    balance : 0,
    fullName : "",
    mobile : null,
}

function reducer(state=bank,action){
    switch(action.type){
    case "deposit":
        return {...state,balance:state.balance + +action.payload}
    case "withdraw":
        return {...state,balance:state.balance - +action.payload}
    case "mobileUpdate":
        return {...state,mobile:action.payload}
    case "nameUpdate":
        return{...state,fullName:action.payload}
    case "reset":
        return bank 
    default :
    return state
  }
}

function transactionReducer(state=[],action){
    switch(action.type){
    case "ADD_TRANSACTION":
        return[...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
    default :
    return state
    }
}

let rootReducer = combineReducers(
    {
        account:reducer,
        transaction:transactionReducer
    }
)
const store=createStore(rootReducer)

export default store;
// console.log(store.getState())
// store.dispatch({type:"deposit",payload:1000})
// console.log(store.getState())

// store.dispatch({type:"withdraw",payload:100})
// console.log(store.getState())

// store.dispatch({type:"mobileUpdate",payload:9700784065})
// console.log(store.getState())

// store.dispatch({type:"nameUpdate",payload:"Mahesh Babu"})
// console.log(store.getState())