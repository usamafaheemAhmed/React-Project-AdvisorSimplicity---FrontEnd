import React from 'react';
import { useNavigate } from 'react-router-dom';

function Options() {

    // let Navigate = useNavigate();
    // function Option1st(){
    //     Navigate('/Personal-Details')
    // }
    // function Option2nd(){
    //     Navigate('/Business-Tax-Structure')
    // }
    // function Option3rd(){
    //     Navigate('/Income-And-Expenses')
    // }
    // function Option4th(){
    //     Navigate('/Professional-Advisors')
    // }
    // function Option5th(){
    //     Navigate('/Assets-And-Liabilities')
    // }
    // function Option6th(){
    //     Navigate('/Investments')
    // }
  return (
    <div className='row my-5 mx-2'>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Personal-Details'>Professional Details</a></b></h5>
        </div>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Business-Tax-Structure'>Business Tax Structure</a></b></h5>
        </div>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Income-And-Expenses'>Income & Expense</a></b></h5>
        </div>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Professional-Advisors'>Professional Advisors</a></b></h5>
        </div>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Assets-And-Liabilities'>Assets & Liabilities</a></b></h5>
        </div>
        <div className='col-md-2 text-center'>
            <h5 ><b><a id="Options" href='/Investments'>Investments</a></b></h5>
        </div>
    </div>
  )
}

export default Options;