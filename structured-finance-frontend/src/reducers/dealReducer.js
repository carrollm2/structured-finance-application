export default function dealReducer(state={deals: []}, action){

    switch (action.type){
        case 'FETCH_DEALS':
            return {deals: action.payload}
        case 'ADD_DEAL':
            return {...state, deals: [...state.deals, action.payload]}
        default:
            return state
    }

}