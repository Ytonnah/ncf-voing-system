import logo from './logo.svg';
import './App.css';
import './res/setup.css'
import 'bootstrap/dist/css/bootstrap.css';

//import { Router } from 'express';
import { Row,Col,Container,Button } from 'react-bootstrap';

import Homepage from './res/Homepage';
import Dashboard from './res/Dashboard';
//setup routes in here later

function App() {
  return (
    <div>
      <Homepage></Homepage>

    </div>
  );
}

export default App;
