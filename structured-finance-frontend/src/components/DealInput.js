import React from 'react';
import {connect} from 'react-redux';
import {addDeal} from '../actions/addDeal'
import './App.css'

class DealInput extends React.Component{

    state = {ticker: '',
        series: '', 
        asset_class: ''
    };


    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addDeal(this.state);
        this.setState({
            ticker: '',
            series: '',
            asset_class: ''
        })
    }

    render (){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br></br>
                    <label>Ticker: </label>
                    <input type='text' placeholder='Ticker' value ={this.state.ticker} name="ticker" onChange={this.handleOnChange}/>
                    <br></br>
                    <br></br>
                    <label>Series: </label>
                    <input type='text' placeholder='Series' value ={this.state.series} name="series" onChange={this.handleOnChange}/>
                    <br></br>
                    <br></br>
                    <label>Asset Class: </label>
                    <input type='text' placeholder='Asset Class' value ={this.state.asset_class} name="asset_class" onChange={this.handleOnChange}/>
                    <br></br>
                    <br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addDeal})(DealInput)