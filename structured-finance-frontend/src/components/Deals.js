import React from 'react';

const Deals = (props) => {
    return (
        <div>
            {props.deals.map(deal => <li key={deal.id}> {deal.ticker} {deal.series} {deal.asset_class}</li>)}
        </div>
    )
}
export default Deals