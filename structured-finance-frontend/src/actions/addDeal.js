export const addDeal = (data) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/deals', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)       
        })
        .then(response => response.json())
        .then(deal => dispatch({type: 'ADD_DEAL', payload: deal}))
        .catch(error => alert(error.message));
    }

}