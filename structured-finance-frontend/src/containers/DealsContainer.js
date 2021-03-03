import React from'react';
import {connect} from 'react-redux';
import {fetchDeals} from '../actions/fetchDeals';
import Deals from '../components/Deals';
import DealInput from '../components/DealInput';

class DealsContainer extends React.Component{
    componentDidMount(){
        this.props.fetchDeals();
    }

    render (){
        return (
            <div>
                <DealInput />
                <br></br>
                <br></br>
                <Deals deals={this.props.deals}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    deals: state.deals
})

export default connect(mapStateToProps, {fetchDeals})(DealsContainer)