import React , { useState } from 'react'
import '../styles/Calculate.css'
import { FaWeight } from 'react-icons/fa'
import { BiBarChart } from 'react-icons/bi'

const Calculate = () => {

    const [height , setHeight] = useState('');
    const [weight , setWeight] = useState('');
    const [bmiresult , setBmiresult] = useState('');
    const [bmistatus , setBmistatus] = useState('');

    const bmiCalculate = () => {

        let bmi = Number( weight / (height / 100)**2 ).toFixed(2);

        setBmiresult(bmi);

        let status = getStatus(bmi);

        setBmistatus(status);
    }

    const getStatus = (bmi) => {
        if(bmi <= 18.5)  return "You are Underweight"
        else if(bmi > 18.5 && bmi <= 24.9) return "You have Normal Weight"
        else if(bmi >= 25 && bmi <= 29.9) return "You are Overweight"
        else if(bmi >= 25 ) return "You are Obese"
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>BMI Calculator <FaWeight className="heading-logo"/></h1>
                
                <div className="form-body">
                    <input type="text" name="height" placeholder="Enter Height in cm" required onChange={(e)=> setHeight(e.target.value)}/>
                    <input type="text" name="weight" placeholder="Enter Weight in kg" required onChange={(e)=> setWeight(e.target.value)}/>
                    <button onClick={bmiCalculate} >Calculate <BiBarChart size={23} className="logo"/></button>
                </div>

                <div className="form-status">
                    <h3>{bmiresult}</h3>
                    <h3>{bmistatus}</h3>
                </div>
            </form>
        </div>
    )
}

export default Calculate;
