import React from 'react'
// import {Redirect} from 'react-router-dom';
import ReportsContainer from '../containers/ReportsContainer'

const Deal = (props) => {

    let deal = props.deals[props.match.params.id - 1]
    // let deal = props.deals.filter(deal => deal.id === props.match.params.id)[0]

    return (
        <div>
            <li>
                {deal ? deal.ticker : null} - {deal ? deal.series : null} - {deal ? deal.asset_class : null}
            </li>
            <ReportsContainer deal={deal}/>
        </div>
    )
}

export default Deal