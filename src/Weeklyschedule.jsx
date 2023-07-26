

import React, { useState } from 'react';
import moment, { min } from 'moment';
import 'moment-timezone';
import STYLE  from "./weeklyschedule.module.css"
import JSON from "./data.json"

const WeeklySchedule = () => {
  let data=JSON
  const [currentDate, setCurrentDate] = useState(moment()); // Default to today's date
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const workingHours = {
    start: 8,
    end: 23,
  };

  const handlePreviousWeek = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setCurrentDate(currentDate.clone().add(1, 'week'));
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const convertTimeToTargetTimezone = (time) => {
    return time.clone().tz(selectedTimezone);
  };

  return (
    <div>

      

    <div className={STYLE.date}>
         <button onClick={handlePreviousWeek}>Previous Week</button>
         <h3>{currentDate.format('MMM D, YYYY')}</h3>
         <button onClick={handleNextWeek}>Next Week</button>
       
    </div>
      <br />
      <label >
        Select Timezone:
        <br />
        <div id={STYLE.timezone}>
        <select value={selectedTimezone} onChange={handleTimezoneChange} className={STYLE.input}>
          <option value="UTC" >UTC</option>
          <option value="America/New_York">America/New_York</option>
          {/* Add more timezones as needed */}
        </select>
        </div>
      </label>
      <br />
      {/* <h3>{currentDate.format('MMM D, YYYY')}</h3> */}
      <ul>
        {weekdays.map((day, index) => {
          const startTime = moment().utc().hour(workingHours.start).minute(0).second(0).add(index, 'days');
          
          const startTime1 = moment().utc().hour(workingHours.start).minute(30).second(0).add(index, 'days');
          const startTime2 = moment().utc().hour(workingHours.start).minute(60).second(0).add(index, 'days');
          const startTime3 = moment().utc().hour(workingHours.start).minute(90).second(0).add(index, 'days');
          const startTime4 = moment().utc().hour(workingHours.start).minute(120).second(0).add(index, 'days');
          const startTime5 = moment().utc().hour(workingHours.start).minute(150).second(0).add(index, 'days');
          const startTime6 = moment().utc().hour(workingHours.start).minute(180).second(0).add(index, 'days');
          const startTime7 = moment().utc().hour(workingHours.start).minute(210).second(0).add(index, 'days');
          const startTime8 = moment().utc().hour(workingHours.start).minute(240).second(0).add(index, 'days');
          const startTime9= moment().utc().hour(workingHours.start).minute(270).second(0).add(index, 'days');
          const startTime10= moment().utc().hour(workingHours.start).minute(300).second(0).add(index, 'days');
          const startTime11= moment().utc().hour(workingHours.start).minute(330).second(0).add(index, 'days');
          const startTime12= moment().utc().hour(workingHours.start).minute(360).second(0).add(index, 'days');
          const startTime13= moment().utc().hour(workingHours.start).minute(390).second(0).add(index, 'days');
          const startTime14= moment().utc().hour(workingHours.start).minute(420).second(0).add(index, 'days');
          const startTime15= moment().utc().hour(workingHours.start).minute(450).second(0).add(index, 'days');
          const startTime16= moment().utc().hour(workingHours.start).minute(480).second(0).add(index, 'days');
          const startTime17= moment().utc().hour(workingHours.start).minute(510).second(0).add(index, 'days');
          const startTime18= moment().utc().hour(workingHours.start).minute(540).second(0).add(index, 'days');
          const startTime19= moment().utc().hour(workingHours.start).minute(660).second(0).add(index, 'days');
          const startTime20= moment().utc().hour(workingHours.start).minute(690).second(0).add(index, 'days');
          const startTime21= moment().utc().hour(workingHours.start).minute(720).second(0).add(index, 'days');
          const startTime22= moment().utc().hour(workingHours.start).minute(750).second(0).add(index, 'days');
          const startTime23= moment().utc().hour(workingHours.start).minute(780).second(0).add(index, 'days');
          const startTime24= moment().utc().hour(workingHours.start).minute(810).second(0).add(index, 'days');
          const startTime25= moment().utc().hour(workingHours.start).minute(840).second(0).add(index, 'days');
          const startTime26= moment().utc().hour(workingHours.start).minute(870).second(0).add(index, 'days');

          const endTime = moment().utc().hour(workingHours.end).minute(0).second(0).add(index, 'days');
          
          return (
            
            <li key={index}>
              <label>
                <table>
                  <tr>
            <td>{day}:</td>
          </tr>
        </table> 

              
                 <input type="checkbox" />{convertTimeToTargetTimezone(startTime).format('hh:mm A')} -{' '}
                <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime1).format('hh:mm A')} -{' '}
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime2).format('hh:mm A')} -{' '}
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime3).format('hh:mm A')} -{' '} 
                 <input type="checkbox" /> 
                 {convertTimeToTargetTimezone(startTime4).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime5).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime6).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime7).format('hh:mm A')} -{' '} 
                 
                 <br />
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime8).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime9).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime10).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime11).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime12).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime13).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime14).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime15).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime16).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime17).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime18).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 <br />
                 {convertTimeToTargetTimezone(startTime19).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime20).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime21).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime22).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime23).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime24).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime25).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                 {convertTimeToTargetTimezone(startTime26).format('hh:mm A')} -{' '} 
                 <input type="checkbox" />
                {convertTimeToTargetTimezone(endTime).format('hh:mm A')}-{' '}  
              </label>
              <input type="checkbox" />
            </li>
          );
        })}
           
      </ul>
      
    
    <div>
        <table>
            <tr>
                <th>DATE</th>
            </tr>
            <tr>
                {data.map((x)=>{
                    return <li>{x.Date}</li>
                })}
            </tr>
        </table>

    </div>
    
    </div>
  );
};

export default WeeklySchedule;

