import React from 'react'
// import {Redirect} from 'react-router-dom';
import ReportsContainer from '../containers/ReportsContainer'
import {Button} from './Button/Button.js'
import {Link} from 'react-router-dom';
import './App.css'

const Deal = (props) => {

    let deal = props.deals[props.match.params.id - 1]

    return (
        <>
            <div>
                <h2>
                    {deal ? deal.ticker : null} - {deal ? deal.series : null} - {deal ? deal.asset_class : null}
                </h2>
                <br></br>
                <br></br>
                <ReportsContainer deal={deal}/>
                <br></br>
                <br></br>

                <Link to="/deals">Back to All Deals</Link>

            </div>
            
        </>
    )
}

export default Deal