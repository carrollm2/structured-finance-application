export default function dealReducer(state={deals: []}, action){

    switch (action.type){
        case 'FETCH_DEALS':
            return {deals: action.payload}
        default:
            return state
    }

}