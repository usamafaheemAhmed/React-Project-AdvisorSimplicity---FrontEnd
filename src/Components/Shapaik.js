import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup';

const Shapaik = () => {
    let objectDate = new Date();


    let day = objectDate.getDate();
    // console.log(day); // 23
    
    let month = objectDate.getMonth();
    // console.log(month + 1); // 8
    
    let year = objectDate.getFullYear();
    // console.log(year); // 2022
   const US = () =>{
    alert((month+1)+'/'+day+'/'+year)
   }
   const AUS = () =>{
    alert(year+'/'+(month+1)+'/'+day)
   }
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-3'></div>
            <div className='col-md-3 text-center'>
                <button onClick={US}>American Format</button>
            </div>
            <div className='col-md-3 text-center'>
                <button onClick={AUS}>Australian Format</button>
            </div>
            <div className='col-md-3'></div>
        </div>
    </div>    
  )
}

export default Shapaik