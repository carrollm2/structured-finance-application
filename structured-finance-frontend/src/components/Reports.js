import React from 'react'

const Reports = (props) => {

    console.log(props)
    return (
        <div>
            {props.reports && props.reports.map(report =>
                <li key={report.id}>{report.catgeory} - {report.report_link} - {report.report_date} - {report.rating_agency}</li>)}
        </div>
    )

}

export default Reports