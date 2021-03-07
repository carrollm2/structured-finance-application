import React from 'react'
import ReportInput from '../components/ReportInput'
import Reports from '../components/Reports'


class ReportsContainer extends React.Component{

    render(){
        return (
            <div>
                <ReportInput deal={this.props.deal}/>
                <Reports reports={this.props.deal && this.props.deal.reports}/>
            </div>
        )
    }
}

export default ReportsContainer