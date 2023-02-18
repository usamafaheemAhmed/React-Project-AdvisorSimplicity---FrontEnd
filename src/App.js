import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/Topbar/Topbar';

import PersonalDetail from './Components/personalDetail/PersonalDetail';
import BusinessTextStucture from './Components/business-textStructure/BusinessTextStucture';
import IncomeExpenses from './Components/incomeAndExpenses/IncomeExpenses';
import ProfessionalAdvisers from './Components/professionalAdvisers/ProfessionalAdvisers';
import SideBarrr from './Components/SideBar/SideBarrr';

function App() {
  return (
  <>
        <Topbar />
    <div className="row mx-1" id="Shapaik">
      <div className="col-md-2 m-0 p-0 ">
        <SideBarrr/>
      </div>
      <div className="col-md-10 m-0 p-0 ">        
        <PersonalDetail/>
        <BusinessTextStucture/>
        <IncomeExpenses/>
        <ProfessionalAdvisers/>
      </div>
    </div>
  </>
  );
}

export default App;
