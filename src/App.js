// import './App.css';
import Drp from './components/dropdown/Drp';
import "@material-tailwind/react/tailwind.css";

import Navbar from './components/dropdown/Navbar';
// import Alert from './components/Alerts/Alert';
import PageOne from './components/Page1/PageOne';
// import { Router } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Link, useRoutes} from "react-router-dom";
import Page2 from './components/Page2/Page2';


function App() {
  // useRoutes()

  return (
    <div className="App bg-gray-200 h-full w-full pb-[200px]">
      <header className="App-header">
        {/* <PageOne/>
        <Page2/> */}
        
        {/*  */}
        <Router>
          {/* We have to provide the Navbar inside router */}
          <Navbar /> 

        <Routes>
          <Route path="/about" element={<Page2/>} />
          <Route path="/" element={<PageOne/>} />
        </Routes>
        </Router>
        {/*  */}
      </header>
    </div>
  );
}

export default App;
