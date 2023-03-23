import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PersonalDetail from './components/PersonalDetails/PersonalDetail';
import BusinessTextStucture from './components/Business&TaxStructure/BusinessTextStucture';
import IncomeExpenses from './components/Income&Expenses/IncomeExpenses';
import ProfessionalAdvisers from './components/ProfessionalAdvisors/ProfessionalAdvisers';
import SideBar from './components/SideBar/SideBarrr';
import Topbar from './components/Topbar/Topbar';
import AssetsLiabilities from './components/Assets&Liabilities/AssetsLiabilities';
import Investments from './components/Investments/Investments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Options from './components/Options';
import SuperRetriement from './components/Super&Retirement/SuperRetriement';
import EstatePlanning from './components/EstatePlanning/EstatePlanning';
import SMSF from './components/SMSF/SMSF';
import InvestmentTrust from './components/InvestmentTrust/InvestmentTrust';
import PersonalInsurance from './components/PersonalInsurance/PersonalInsurance';
import RiskProfile from './components/RiskProfile/RiskProfile';
import GoalsObjectives from './components/Goals&Objectives/GoalsObjective';

function App() {
  return (

    <div className='container-fluid'>

    
    <div className="row" id="Shapaik">
      <div className="col-md-2 m-0 p-0 ">
        {/* <SideBar/> */}
      </div>

      <div className="col-md-10 m-0 p-0"> 
      {/* <Topbar />   */}
      <Options />
      
      <BrowserRouter>
      <Routes>
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
      </Routes>
      </BrowserRouter>
      </div>
    </div>
    
    </div>
  );
}

export default App;
