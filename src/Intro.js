import React, { useState } from 'react'
import './App.css';
import moment from 'moment';


function Intro() {
    
    const yourdate = "07-01-1999"; 
    // var b = moment([2007, 0, 28]);
    // var diff = b.diff(yourdate, 'years') 
    
    var b = moment("07.01.1999", "DD.MM.YYYY");
    var a = moment();
  
    var diffDuration = moment.duration(a.diff(b))
    // var year = endDate.diff(startDate, 'years');
    // var month = endDate.diff(startDate, 'months');
    // var days = endDate.diff(startDate, 'days');
    
    // var a = moment(yourdate).format('YYYY-MM-DD') 
    // var a = moment([2007, 0, 29]);
    // let year = moment().format('YYYY')-moment(yourdate).format('YYYY');
    // let month = moment().format('MM')-moment(yourdate).format('MM');
    // let day = moment().format('DD')-moment(yourdate).format('DD');
    

    // if (day < 0 ) {
    //     month = month - 1;
    //     day = 30+ day; 
    // } if (month < 0) {
    //     year = year - 1;
    //     month = month + 12 ;
    // }        

    return (
        <div className="intro">
            <h2>
                Hey, i am Ashutosh Namdev. I have completed my graduation from SGSITS,Indore in Civil Engineering. 
            </h2>
            <div className="date"> 
                <p>My Birthdate is  {yourdate}     <br/> &
                <br/>
                {/* Age = {day} days {month} months {year} years */}
                My age is= {diffDuration.years()} years {diffDuration.months()} months {diffDuration.days()} days
                </p>
            </div>
        </div>
    )
}

export default Intro
