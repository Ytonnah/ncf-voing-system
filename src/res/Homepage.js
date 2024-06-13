import {  Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function enter_election_redirect(){
    //
}
export default function Homepage(){
    //this will be the landing page of the site

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_user_login, setShow_user_login] = useState(false);
    const handleClose2 = () => setShow_user_login(false);
    const handleShow2 = () => setShow_user_login(true);


    return(
        <div>
          
                <div id="div1">
                    <div id="d1">
                        <img src="img\ncf_logo.png" alt="lg1"></img>
                        <h1>Naga College Foundation Voting Systems</h1>
                    </div>
                    
                    <div id="d2">
                        <Button variant="primary" onClick={handleShow}>
                            I'm a Facilitator
                        </Button>
                          <a href=""  className="btn btn-warning">About</a>
                    </div>
                     
                    
                </div>

                <div id="Hbody">
                    <div>
                        <img src="img\ncf_logo.png" alt="lg2"></img>
                        <h2>Welcome to NCF Voting Sytem</h2>
                        <div>
                             <h3>Please enter the Election Code:</h3>
                            <input type="number" maxLength={9}></input>
                            <br></br>
                            <Button variant="primary" onClick={handleShow2}>
                                Enter
                            </Button>
                        </div>
                       
                    </div>
                    


                </div>

                <div id="footer">
                 <h5>Developed By Ytonnah</h5>

                </div>
              
                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Facilitator Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Username</h3>
                        <input type="text"></input>

                        <h3>Password</h3>
                        <input type="password"></input>


                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={show_user_login} onHide={handleClose2}>
                    <Modal.Header closeButton>
                    <Modal.Title>Voter's Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Please enter your GBox Email
                        </h3>
                        <input type="text"></input>

                        <h3>Please enter your ID no.</h3>
                        <input type="number"></input>


                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>
                        Login
                    </Button>
                    </Modal.Footer>
                </Modal>

        </div>
    );
}
