import React from 'react'
import {connect} from 'react-redux'
import {deleteReport} from '../actions/deleteReport'
import {Link} from 'react-router-dom';

const Reports = (props) => {

    const handleDelete = (report) => {
        props.deleteReport(report.id, report.deal_id)
    }    

    return (
        <div>
            {props.reports && props.reports.map(report =>
                <li key={report.id}> <a href={report.report_link} target="_blank">{report.category}</a> - {report.report_date.slice(0,10)} - {report.rating_agency} <button onClick={()=> handleDelete(report)}>Delete</button></li>)}
        </div>
    )

}

export default connect(null, {deleteReport})(Reports)