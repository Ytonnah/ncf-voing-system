import logo from './logo.svg';
import './App.css';
import './res/setup.css'
import 'bootstrap/dist/css/bootstrap.css';

//import { Router } from 'express';
import { Row,Col,Container,Button } from 'react-bootstrap';

import Homepage from './res/Homepage';
import Dashboard from './res/Dashboard';
import Vote from './res/Vote_View';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//setup routes in here later

function App() {
  return (
    <div>
      <Router>
              <Routes>
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/login' element={<Homepage></Homepage>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/vote' element={<Vote></Vote>}></Route>
              </Routes>
     </Router>

      
    </div>
  );
}

export default App;
