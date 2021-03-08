export const deleteReport = (reportId, dealId) => {
    return (dispatch) => {
        return fetch (`http://127.0.0.1:3000/api/v1/deals/${dealId}/reports/${reportId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(deal => dispatch({type: 'DELETE_REPORT', payload: deal}))
    }

}