import './App.css';
// import Intro from "./Intro";
import moment from 'moment';


function App() {

  const yourdate = "07-01-1999";
  var b = moment("07.01.1999", "DD.MM.YYYY");
  var a = moment();
  var diffDuration = moment.duration(a.diff(b))

  return (
    <div className="app">
    <div className="header">
    <p>
      Portfolio
    </p>
    </div>
    <div className="profile">
      <img  src="data:image/png;base64,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"/>
    <h1>
      Ashutosh Namdev
    </h1> 
    </div>
    <hr/>
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
    <hr/>
    <h1>Internship Details </h1>

    <div className="box">
      <div className="info">  

        <h1> Internship 1 </h1>
        <img height="100px"s src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5SjdTlW3xXhcRUXh20GrMoKpOp378W8fXA&usqp=CAU" />
        <p> Completed training at Dewas-Bhopal highway.Structural inventory and conditioning survey</p>
      </div>
      <div className="info">
        <h1> Internship 2</h1>
        <img height="100px" src="data:image/png;base64,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" />
        <p> Completed projects on ReactJS Framework.Spotify clone, Whatsapp clone, Covid-19 tracker </p>
      </div>
      <div className="info">
        <h1> Internship 3</h1>
        <img height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5SjdTlW3xXhcRUXh20GrMoKpOp378W8fXA&usqp=CAU" />
        <p> Completed training at pipliyahana flyover construction porject. This was completed under IDA Indore  </p>
      </div>      
    </div>
    <h3> <u>contact details : </u></h3>
    <div className="contact">
   
    Mobile: 9589378580 <br/>
    linkedin:www.linkedin.com <br/>
    <a href="https://github.com/ashunamdev">git: www.github.com/ashunamdev</a>
    </div>
    </div>
  );
}

export default App;
