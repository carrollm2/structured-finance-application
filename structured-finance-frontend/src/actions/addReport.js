export const addReport = (report, dealId) => {


    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/deals/${dealId}/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(report)
        })
        .then(response => response.json())
        .then(report => dispatch({type: 'ADD_REPORT', payload: report}))
    }
}