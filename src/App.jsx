import React,{ useState } from 'react' 
import Weeklyschedule from './Weeklyschedule'
import Date from './Date'
import Home from "./Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTargetVisible(true);
  };
  return (
    <>
      <div>
      <Home onClick={handleButtonClick} />
      {isTargetVisible && <Weeklyschedule />}
    </div> 
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Weekly" element={<Weeklyschedule/>}/>
          <Route path="/Date" element={<Date/>}/>
        </Routes>
      </Router>
      
        
    </div>
    </>
  )
}

export default App