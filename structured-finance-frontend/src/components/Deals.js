import React from 'react';
import {Route, Link} from 'react-router-dom';
import Deal from './Deal';

const Deals = (props) => {
    return (
        <div>
            {props.deals.map(deal => 
                <div key={deal.id}>
                    <Link to={`/deals/${deal.id}`}>{`${deal.ticker}`} {`${deal.series}`}</Link>
                </div>)}
        </div>
    )
}
export default Deals