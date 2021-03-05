import React from 'react'
// import {Redirect} from 'react-router-dom';

const Deal = (props) => {

    let deal = props.deals[props.match.params.id - 1]

    return (
        <li>
            {deal ? deal.ticker : null} - {deal ? deal.series : null} - {deal ? deal.asset_class : null}
        </li>
    )
}

export default Deal