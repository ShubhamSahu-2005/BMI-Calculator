import React,{useState} from 'react'
import './Bmi.css'
const Bmi = () => {
 
  const[weight,setWeight]=useState('');
  const[height,setHeight]=useState('');
  const[bmi,setBmi]=useState("");
  const[message,setMessage]=useState('');
  
  let calBmi=(e)=>{
    e.preventDefault();
    if(weight===0|| height===0){
      alert("Enter a Valid Height and Weight");
    } else{
      let bmi=(weight/(height* height)* 10000)
      setBmi(bmi.toFixed(1));
      if(bmi<=18.5){
        setMessage("You are UnderWeight!!")
       
      }else if(bmi>18.5 && bmi<=25.9){
        setMessage("You are Healthy!!")

      }
      else if(bmi>26.0 && bmi<=30){
        setMessage("You are OverWeight");
     
      }
      else {
        setMessage("You are suffering from Severe Obesity")
       
      }
    }
  }
  let reload=()=>{
    window.location.reload();
  }

  return (
    <div className='hero' >
    <div className='container-1'>
        <h1 className="heading">BMI Calculator</h1>
        <form onSubmit={calBmi}>
            <div className='inputs'>
            <label>Weight(kgs)</label>
            <input value={weight} placeholder='Enter Your Weight In Kgs!!'  min={1} type='number' onChange={(e)=>setWeight(e.target.value)}></input>
            <label>Height(in cms)</label>
            <input value={height} placeholder='Enter Your Height In Cms!!' min={1} type="number" onChange={(e)=>setHeight(e.target.value)}></input>
            </div>
           <div className='result'>
                <button className="btn" type='submit'>Submit</button>
                <button className='btn-reload' onClick={reload} type='submit'>Refresh</button>
           </div>
           <h3> Your BMI is :{bmi}</h3>
           <p>{message}</p>
        </form>
        
         
        
    </div>
   
    </div>
  )
}

export default Bmi