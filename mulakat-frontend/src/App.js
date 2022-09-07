import logo from './logo.svg';
import BlankLayout from "./layouts/BlankLayout"
import Bank from './views/Bank';
import UygunkrediFaizi from './views/UygunkrediFaizi';
import MevduatFaizi from './views/MevduatFaizi';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Bank />}/>
            <Route path='/uygunkredifaizi' element={<UygunkrediFaizi/>}/>
            <Route path='/mevduatfaizi' element={<MevduatFaizi/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
