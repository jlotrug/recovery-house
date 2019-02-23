function clientsReducer(state={loading: false, clients:[]}, action){

  switch(action.type){
    case "ADD_CLIENT":
    console.log(action)
    return {...state, clients: state.clients.concat(action.client)}
    case 'LOADING_CLIENTS':
    return {...state, loading: true}
    case "FETCH_CLIENTS":
    return {loading: false, clients: action.payload}
     default: return state
  }
}

export default clientsReducer
