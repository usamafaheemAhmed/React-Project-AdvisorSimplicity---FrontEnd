import React from 'react';
import './sideBar.css';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBuilding, faUser, faMoneyBill, faDollar, faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';


function SideBar() {

  
  let Navigate = useNavigate();
  
  function ShowAllSheds(){
    // Navigate('/Show-Sheds');
  }
  function AddingShed(){
    // Navigate('/Add-Shed');
  }

  function ShowAllCompanies(){
    // Navigate('/company-list');
  }
  function AddingCompany(){
    // Navigate('/add-company');
  }
  
  function ShowAllUsers(){
    // Navigate('/user-list');
  }
  function AddingUsers(){
    // Navigate('/add-user');
  }
  
  function ShowAllProducts(){
    // Navigate('/product-list');
  }
  function AddingProducts(){
    // Navigate('/add-product');
  }
  
  function ShowAllExpenses(){
    // Navigate('/expense-list');
  }
  function AddingExpenses(){
    // Navigate('/add-expense');
  }
  
  function ShowAllIncomes(){
    // Navigate('/income-list');
  }
  function AddingIncomes(){
    // Navigate('/add-income');
  }

  return (
    // <div className="">      
    //   <li onClick={ShowAllSheds}><FontAwesomeIcon icon={faStore}/> Show All Sheds</li>      
    //   <li onClick={AddingShed}><FontAwesomeIcon icon={faPlus}/> Add New Shed</li>
            
    //   <li onClick={ShowAllCompanies}><FontAwesomeIcon icon={faBuilding}/> Show All Companies</li>      
    //   <li onClick={AddingCompany}><FontAwesomeIcon icon={faPlus}/> Add New Company</li>

      
    //     <div>
    //       <li onClick={ShowAllUsers}><FontAwesomeIcon icon={faUser}/> Show All Users</li>      
    //       <li onClick={AddingUsers}><FontAwesomeIcon icon={faPlus}/> Add New User</li>
    //     </div>: <div className='d-none'></div>
     

    //   <li onClick={ShowAllProducts}><FontAwesomeIcon icon={faCartShopping}/> Show All Products</li>      
    //   <li onClick={AddingProducts}><FontAwesomeIcon icon={faPlus}/> Add New Product</li>

    //   <li onClick={ShowAllExpenses}><FontAwesomeIcon icon={faMoneyBill}/> Show All Expenses</li>      
    //   <li onClick={AddingExpenses}><FontAwesomeIcon icon={faPlus}/> Add New Expense</li>
      
    //   <li onClick={ShowAllIncomes}><FontAwesomeIcon icon={faDollar}/> Show All Incomes</li>      
    //   <li onClick={AddingIncomes}><FontAwesomeIcon icon={faPlus}/> Add New Income</li>
    // </div>
    <>
    <h2>pka</h2></>
  )
}

export default SideBar