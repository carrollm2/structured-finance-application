export default function dealReducer(state={deals: []}, action){

    switch (action.type){
        case 'FETCH_DEALS':
            return {deals: action.payload}
        case 'ADD_DEAL':
            return {...state, deals: [...state.deals, action.payload]}
        case 'ADD_REPORT':
            let deals = state.deals.map(deal => {
                if (deal.id === action.payload.id){
                    return action.payload
                } else {
                    return deal
                }                
            })
            return {...state, deals: deals}  
            
        case 'DELETE_REPORT':
            let listOfDeals = state.deals.map(deal => {
                if (deal.id === action.payload.id){
                    return action.payload
                } else {
                    return deal
                }                
            })
            return {...state, deals: listOfDeals}              
        default:
            return state
    }

}