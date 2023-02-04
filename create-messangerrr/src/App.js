

import './App.css';
// import FormCom from './companents/form1';
import FormComponents from './companents/form1/form';


function App() {
  return (
    <div className="App" style={{display:"flex", marginAuto:"0"}}>
    {/* <div style={{marginLeft:"20%"}}> <FormCom/></div> */}
   <div style={{marginLeft:"30%"}}>  <FormComponents/></div>
    </div>
  );
}

export default App;
