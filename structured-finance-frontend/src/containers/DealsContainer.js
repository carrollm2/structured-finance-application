import React from'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchDeals} from '../actions/fetchDeals';
import Deals from '../components/Deals';
import Deal from '../components/Deal';
import DealInput from '../components/DealInput';

class DealsContainer extends React.Component{
    componentDidMount(){
        this.props.fetchDeals();
    }

    render (){
        return (
            <div>
                {/* <DealInput />
                <br></br>
                <br></br>
                <Deals deals={this.props.deals}/> */}
                <Route path='/deals/new' component={DealInput} />
                <Route path='/deals/:id' render={(routerProps) => <Deal {...routerProps} deals={this.props.deals} /> } />
                <Route exact path='/deals' render={(routerProps) => <Deals {...routerProps} deals={this.props.deals} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    deals: state.deals
})

export default connect(mapStateToProps, {fetchDeals})(DealsContainer)