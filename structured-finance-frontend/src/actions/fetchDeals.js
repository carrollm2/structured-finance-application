import { connect } from "react-redux"

export function fetchDeals(action){

      console.log('inside fetch deals');
      return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/deals', {method: 'GET'})
        .then(response => response.json())  
        .then(deals => dispatch({
            type: "FETCH_DEALS",
            payload: deals
        }))
      }  


}