import React,{useState} from "react";

const App =()=>{
  let Time=new Date().toLocaleTimeString();
  const [ctime,settime]=useState(Time);

  const UpdateTime=()=>{
    Time=new Date().toLocaleTimeString();
    settime(Time);
  };

  setInterval(UpdateTime,1000)  

  return(
  <>
    <h1>{ctime}</h1>
    
  </>
);
};
export default App;
                                                                          