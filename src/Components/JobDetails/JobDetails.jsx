/*Author Sai*/

import React, { useContext, useEffect, useState } from 'react'
import './JobDetails.scss'
import { detailComp } from '../../App';
import Header from '../Common/Header/Header';
import { constants } from '../../Constants/Constant';
export const JobDetails = () => {
  const dat = useContext(detailComp);
  const [detail,setDetail]=useState({});
  useEffect(()=>{
    // let a;
    //   console.log(dat.detailCard,"jhjb")
      setDetail(dat.detailCard.data);
      // console.log(dat.detailCard.data)
      // a=dat.detailCard.data;
      // console.log(a,"hy")
  },[])

  return (
    <div>
    <Header />
    <div className='JobDetails'>
        {/* <div className='JobDetails__Heading'>
      <h1 className='JobDetails__Heading__h1'>EXL |</h1>
      <h4 className='JobDetails__Heading__h4'>Job Description-AVP AI Transformation Leader</h4>
      </div> */}
      <hr></hr>
      <div className='JobDetails__Title'>
        <h5 className='JobDetails__Title__Name'>{constants.details.dataProducts}</h5>
        <p className='JobDetails__Title__Info'>{detail.title}</p>
      </div>
      <div className='JobDetails__Title'>
        <h5 className='JobDetails__Title__Name'>{constants.details.subscribers}</h5>
        <p className='JobDetails__Title__Info'>{detail.subscribers}</p>
      </div>
      <div className='JobDetails__Title'>
        <h5 className='JobDetails__Title__Name'>{constants.details.dataSecurity}</h5>
        <p className='JobDetails__Title__Info'>{detail.dataSecurity}</p>
      </div>
      <div className='JobDetails__Experience'>
        <h5 className='JobDetails__Experience__Title'>{constants.details.dataQuality}</h5>
        <p className='JobDetails__Experience__years'>{detail.dataQuality}</p>
      </div>
      <div className='JobDetails__Location'>
        <h5 className='JobDetails__Location__Place'>{constants.details.domain}</h5>
        <p className='JobDetails__Location__City'>{detail.domain}</p>
      </div>
      <div className='JobDetails__Job'>
        <h5 className='JobDetails__Location__Place'>{constants.details.description}</h5>
        <h4>{detail.description}</h4>
      </div>
      <div className='JobDetails__Job'>
        <h5 className='JobDetails__Job__Summary'>{constants.details.sourceType}</h5>
        <h4>{detail.sourceType}</h4>
      </div>
      {/* <div className='JobDetails__Requried'>
        <h5 className='JobDetails__Required__Skills'>Skills Required</h5>
        <p className='JobDetails__Required__RS'>ApacheNifi,Microsoft SSIS,SQL,Python,Data Warehousing,AWS Kinesis,Apache Kafka,Data Governance,Version Control</p>
      </div>
      <div className='JobDetails__Salary'>
        <h5 className='JobDetails__Salary__Range'>Salary Range</h5>
        <p className='JobDetails__Salary__USD'>USD 350-400k Per Annum</p>
      </div> */}
    </div>
    </div>
  );
};

export default JobDetails;
