import './App.css';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PersonalDetail from './Components/PersonalDetails/PersonalDetail';
import BusinessTextStucture from './Components/Business&TaxStructure/BusinessTextStucture';
import IncomeExpenses from './Components/Income&Expenses/IncomeExpenses';
import ProfessionalAdvisers from './Components/ProfessionalAdvisors/ProfessionalAdvisers';
import SideBar from './Components/SideBar/SideBarrr';
import Topbar from './Components/Topbar/Topbar';
import AssetsLiabilities from './Components/Assets&Liabilities/AssetsLiabilities';
import Investments from './Components/Investments/Investments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Options from './Components/Options';
import SuperRetriement from './Components/Super&Retirement/SuperRetriement';
import EstatePlanning from './Components/EstatePlanning/EstatePlanning';
import SMSF from './Components/SMSF/SMSF';
import InvestmentTrust from './Components/InvestmentTrust/InvestmentTrust';
import PersonalInsurance from './Components/PersonalInsurance/PersonalInsurance';
import RiskProfile from './Components/RiskProfile/RiskProfile';
import GoalsObjectives from './Components/Goals&Objectives/GoalsObjective';

import BusinessTextStucture_Edit from './PatchComponents/Business&TaxStructure/BusinessTextStucture_Edit';
import PersonalDetail_Edit from './PatchComponents/PersonalDetails/PersonalDetail_Edit';
import ProfessionalAdvisers_Edit from './PatchComponents/ProfessionalAdvisors/ProfessionalAdvisers_Edit';
import AllClients from './GetComponents/AllClients';
import IncomeExpenses_Edit from './PatchComponents/Income&Expenses/IncomeExpenses_Edit';
import AssetsLiabilities_Edit from './PatchComponents/Assets&Liabilities/AssetsLiabilities_Edit';
import Investments_Edit from './PatchComponents/Edit_Investments/Investments_Edit';
import EstatePlanning_Edit from './PatchComponents/Edit_EstatePlanning/EstatePlanning_Edit';
import Edit_SuperRetriement from './PatchComponents/Edit_Super&Retirement/Edit_SuperRetriement';
import SMSF_Edit from './PatchComponents/SMSF/SMSF_Edit';

function App() {
  return (

    <div className='container-fluid'>

    
    <div className="row" id="Shapaik">
      <div className="col-md-2 m-0 p-0 ">
        <SideBar/>
      </div>

      <div className="col-md-10 m-0 p-0"> 
      <Topbar />  
      <Options />
      
      <BrowserRouter>
      <Routes>
        {/* GET ROUTING */}
        <Route path='/All-Clients' element={<AllClients/>} />

        {/* POST ROUTING */}
        <Route path='/' element={<PersonalDetail/>} />
        <Route path='/Business-Tax-Structure' element={<BusinessTextStucture/>} />
        <Route path='/Income-And-Expenses' element={<IncomeExpenses/>} />
        <Route path='/Professional-Advisors' element={<ProfessionalAdvisers/>} />
        <Route path='/Assets-And-Liabilities' element={<AssetsLiabilities/>} />
        <Route path='/Investments' element={<Investments/>} />
        <Route path='/Estate-Planning' element={<EstatePlanning/>} />
        <Route path='/Super-And-Retirment' element={<SuperRetriement/>} />
        <Route path='/SMSF' element={<SMSF/>} />
        <Route path='/Investment-Trust' element={<InvestmentTrust/>} />
        <Route path='/Personal-Insurance' element={<PersonalInsurance/>} />
        <Route path='/Risk-Profile' element={<RiskProfile/>} />
        <Route path='/Goals-And-Objectives' element={<GoalsObjectives/>} />


        {/* PATCH ROUTING */}
        <Route path='/Edit-Client' element={<PersonalDetail_Edit/>} />
        <Route path='/Edit-Business-TextStucture' element={<BusinessTextStucture_Edit/>} />
        <Route path='/Edit-Income-And-Expenses' element={<IncomeExpenses_Edit/>} />
        <Route path='/Edit-Professional-Advisors' element={<ProfessionalAdvisers_Edit/>} />
        <Route path='/Edit-Assets-And-Liabilities' element={<AssetsLiabilities_Edit/>} />
        <Route path='/Edit-Investments' element={<Investments_Edit/>} />
        <Route path='/Edit-Estate-Planning' element={<EstatePlanning_Edit/>} />
        <Route path='/Edit-Super-And-Retirment' element={<Edit_SuperRetriement/>} />
        <Route path='/Edit-SMSF' element={<SMSF_Edit/>} />
        {/* <Route path='/Edit-Investment-Trust' element={<InvestmentTrust/>} /> */}
        {/* <Route path='/Edit-Personal-Insurance' element={<PersonalInsurance/>} /> */}
        {/* <Route path='/Edit-Risk-Profile' element={<RiskProfile/>} /> */}
        {/* <Route path='/Edit-Goals-And-Objectives' element={<GoalsObjectives/>} /> */}
      </Routes>
      </BrowserRouter>
      </div>
    </div>
    

    </div>
  );
}

export default App;
