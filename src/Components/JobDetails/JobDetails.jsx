import React from 'react'
import './JobDetails.scss'

const JobDetails = () => {
  return (
    <div className='JobDetails'>
        <div className='JobDetails__Heading'>
      <h1 className='JobDetails__Heading__h1'>EXL |</h1>
      <h4 className='JobDetails__Heading__h4'>Job Description-AVP AI Transformation Leader</h4>
      </div>
      <hr></hr>
      <div className='JobDetails__Title'>
        <h5 className='JobDetails__Title__Name'>Title</h5>
        <p className='JobDetails__Title__Info'>AVP AI Transformation Leader</p>
      </div>
      <div className='JobDetails__Experience'>
        <h5 className='JobDetails__Experience__Title'>Experience</h5>
        <p className='JobDetails__Experience__years'>15+years</p>
      </div>
      <div className='JobDetails__Location'>
        <h5 className='JobDetails__Location__Place'>Location</h5>
        <p className='JobDetails__Location__City'>Dublin,Ireland</p>
      </div>
      <div className='JobDetails__Job'>
        <h5 className='JobDetails__Job__Summary'>Job Summary</h5>
        <ul className='JobDetails__Job__Summary__List'>
            <li className='JobDetails__Job__Summary__List__L1'> Develop And Maintain An Effective Data Architecture And Cloud Strategy Aligned With Organization Goals.</li>
            <li className='JobDetails__Job__Summary__List__L2'> Design, Implement,And Manage ETL Processes On Cloud Platforms,Ensuring Scalability,Reliability,And Cost-Efficiency.</li>
            <li className='JobDetails__Job__Summary__List__L3'>Utilize Cloud Services(E.G.,AWS S3,Glue,EMR,Redshift,Lambda,Kinesis)For Building And Optimizing Data Pipelines And Storage Solutions.</li>
            <li className='JobDetails__Job__Summary__List__L4'>Advocate FOr And Optimize Data Lakehouse Architecture For Analytical And Operational Workloads.</li>
        </ul>
      </div>
      <div className='JobDetails__Qualifications'>
        <h5 className='JobDetails__Qualifications__Study' >Qualifications</h5>
        <ul className='JobDetails__Qualifications__Studied'>
            <li className='JobDetails__Qualifications__S1'>Bachelors Or Higher Degree In A Relevant Field.</li>
            <li className='JobDetails__Qualifications__S2'>5+ Years Of Proven Experience In Data Engineering,Cloud Architecture,And ETL Processes.</li>
            <li className='JobDetails__Qualifications__S3'>Extensive Knoweledge Of Data Lakehouse Technologies,Hudi,Dbt,Airbyte,Redshift,Glue,Kinesis,And Apache Airflow.</li>
            <li className='JobDetails__Qualifications__S4'>Strong Expertise In Programming Languages Like SQL,Python,And Processing Frameworks Like PySpark.</li>
            <li className='JobDetails__Qualifications__S5'>Strong Expertise In Real-Time Data Processing.</li>
            <li className='JobDetails__Qualifications__S6'>Excellent Problem-Solving And Analytical Skills.</li>
            <li className='JobDetails__Qualifications__S7'>Strong Communication And Teamwork Abilities.</li>
        </ul>
      </div>
      <div className='JobDetails__Requried'>
        <h5 className='JobDetails__Required__Skills'>Skills Required</h5>
        <p className='JobDetails__Required__RS'>ApacheNifi,Microsoft SSIS,SQL,Python,Data Warehousing,AWS Kinesis,Apache Kafka,Data Governance,Version Control</p>
      </div>
      <div className='JobDetails__Salary'>
        <h5 className='JobDetails__Salary__Range'>Salary Range</h5>
        <p className='JobDetails__Salary__USD'>USD 350-400k Per Annum</p>
      </div>
    </div>
    
  )
}

export default JobDetails
