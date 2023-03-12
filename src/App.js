import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PersonalDetail from './components/personalDetail/PersonalDetail';
import BusinessTextStucture from './components/business-textStructure/BusinessTextStucture';
import IncomeExpenses from './components/incomeAndExpenses/IncomeExpenses';
import ProfessionalAdvisers from './components/professionalAdvisers/ProfessionalAdvisers';
import SideBarrr from './components/SideBar/SideBarrr';
import Topbar from './components/Topbar/Topbar';
import AssetsLiabilities from './components/Assets&Liabilities/AssetsLiabilities';
import Investments from './components/Investments/Investments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Options from './components/Options';
import SuperRetriement from './components/Super&Retriement/SuperRetriement';

function App() {
  return (
    <div className="row" id="Shapaik">
      <div className="col-md-2 m-0 p-0 ">
        <SideBarrr/>
      </div>

      <div className="col-md-10 m-0 p-0"> 
      <Topbar />  
      <Options />
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalDetail/>} />
        <Route path='/Business-Tax-Structure' element={<BusinessTextStucture/>} />
        <Route path='/Income-And-Expenses' element={<IncomeExpenses/>} />
        <Route path='/Professional-Advisors' element={<ProfessionalAdvisers/>} />
        <Route path='/Assets-And-Liabilities' element={<AssetsLiabilities/>} />
        <Route path='/Investments' element={<Investments/>} />
        <Route path='/Estate-Planning' element={<Investments/>} />
        <Route path='/Super-And-Retirment' element={<SuperRetriement/>} />
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
