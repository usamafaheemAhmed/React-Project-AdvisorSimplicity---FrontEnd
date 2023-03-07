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

function App() {
  return (
    <div className="row mx-1" id="Shapaik">
      <div className="col-md-2 m-0 p-0 ">
        <SideBarrr/>
      </div>

      <div className="col-md-10 m-0 p-0"> 
      <Topbar />  
       
        <PersonalDetail/>
        {/* <BusinessTextStucture/> */}
        {/* <IncomeExpenses/>  */}
        {/* <ProfessionalAdvisers/> */}
        {/* <ProfessionalAdvisers/> */}
        {/* <AssetsLiabilities/> */}
        {/* <Investments /> */}
      </div>
    </div>
  );
}

export default App;
