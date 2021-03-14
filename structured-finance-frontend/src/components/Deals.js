import React from 'react';
import {Route, Link} from 'react-router-dom';
import Deal from './Deal';
import CardItem from './Card/CardItem'
import './Card/Cards.css'


const Deals = (props) => {
    return (
        <>
            <div className="cards__container">
                {props.deals.map(deal => 
                    <div className="cards_wrapper" key={deal.id}>
                        <CardItem 
                            icon={'fas fa-book'}
                            text={`${deal.ticker} ${deal.series} Ratings Reports`}
                            label={deal.asset_class}
                            path={`/deals/${deal.id}`}
                        />
                    </div>)}
                
            </div>
            <div className="create_new_deal">
                <Link to="/deals/new">Add New Deal</Link>
            </div>
        </>

    )
}
export default Deals