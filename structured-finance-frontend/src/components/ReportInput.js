import React from 'react'
import {connect} from 'react-redux'
import {addReport} from '../actions/addReport'

class ReportInput extends React.Component{


    state = {
        category: '',
        report_link: '',
        report_date: '',
        rating_agency: ''
    }



    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event => {
        event.preventDefault()
        this.props.addReport(this.state, this.props.deal.id)
        this.setState({
            category: '',
            report_link: '',
            report_date: '',
            rating_agency: ''
        })
    })

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Report Category:</label>
                    <select name="category" value={this.state.category} onChange={this.handleOnChange}>
                        <option>Pre-Sale</option>
                        <option>Downgrade</option>
                    </select>

                    <label>Report Link:</label>
                    <input type="text" name="report_link" value={this.state.report_link} onChange={this.handleOnChange} />

                    <label>Report Date:</label>
                    <input type="text" name="report_date" value={this.state.report_date} onChange={this.handleOnChange} />
  
                    <label>Rating Agency:</label>
                    <select name="rating_agency" value={this.state.rating_agency} onChange={this.handleOnChange}>
                        <option>Moodys</option>
                        <option>Standard Poors</option>
                        <option>Fitch</option>
                        <option>Kroll</option>
                    </select>

                    <input type="submit" />

                </form>       
            </div>
        )        
    }
} 

export default connect(null, {addReport})(ReportInput)