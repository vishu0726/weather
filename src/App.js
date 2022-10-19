import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios';

function App() {
  //all states are here
  const [data,setData] = useState({})
  const [time, newTime] = useState(new Date().getHours()+":"+new Date().getMinutes());

  // function to fetch api
  async function getApi() {
    const response = await axios.get(`http://api.weatherstack.com/current?access_key=503606f9f489f73e37eb4ae303094707&query=London`);
    console.log(response.data);
    setData(response.data);
  }

  //get day name
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayName = days[new Date().getDay()];

  //function to get time and date
  function getTime() {
    let time = new Date();
    newTime(time.getHours() +":"+time.getMinutes());
  }
  setInterval(getTime,1000);

  const date = new Date().toLocaleDateString();
  // let imgSrc = data.current.weather_icons[0];

  //this for fetching the api when app starts
  useEffect(() => {
    getApi()
  }, [])
  
  return (
    <div className="App">
      {/* timezone*/}
      <div className='upper_section'>
      <div className='date_time'>
        <div className='date'>{dayName}.{date}</div>
        <div className='time'>{time}</div>
      </div>
      {/* temperature */}
      <div className='temp'>
        {/* <h1>{data.current.temperature}&deg;C</h1> */}
        <span className='temperature'>25</span>
        <span className='deg'>&deg;C</span>
        </div>
        <div className='weather_info'>
        {/* <h1>{data.current.weather_descriptions[0]}</h1> */}
        <img src="cloudy.png" alt='cloudy'/>
        <h1>partly cloudy</h1>
         {/* <img src={imgSrc}/> */}
      </div>
      </div>
      {/* windspeed */}
      <div className='wind'>
        {/* <h1>Wind:{data.current.wind_speed}</h1> */}
        {/* <h1 className='wind_speed'>{data.current.wind_speed} km/hr</h1> */}
        <h1>Wind:East</h1>
        <h1 className='wind_speed'>5 km/hr</h1>
      </div>
    </div>
  );
}

export default App;
