import React from 'react'
import {connect} from 'react-redux'
import {deleteReport} from '../actions/deleteReport'

const Reports = (props) => {

    // console.log(props)


    const handleDelete = (report) => {
        props.deleteReport(report.id, report.deal_id)
    }    


    return (
        <div>
            {props.reports && props.reports.map(report =>
                <li key={report.id}>{report.catgeory} - {report.report_link} - {report.report_date} - {report.rating_agency}<button onClick={()=> handleDelete(report)}>Delete</button></li>)}
        </div>
    )

}

export default connect(null, {deleteReport})(Reports)