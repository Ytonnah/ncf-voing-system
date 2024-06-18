import { Col, Container, Row } from "react-bootstrap";
import './admn_pnl.css'

export default function Dashboard(){
    //admin dashboard
    //create a separate react project for server
    // this one requires authenticator
    //need CRUD here

    //no need to scale this bigger since the experimental stuff is for ncf
    //positions table CRUD {pos id, pos_code,pos_name,pos_description=nullable}
    //elections table CRUD {election_id,election_code,election_description}
    //candidates CRUD {candidate_id, candidate_name, election_id,pos_id}

    return(
        <div>
            <div id="pan1">
                <h1>Admin Dashboard view</h1>
            </div>
            
            <Container style={{opacity:"0"}}>
                <Row>
                    <Col>
                        <table>
                            <tr id="theader">Elections</tr>
                            <tbody>
                                <tr>
                                    <th>Election ID</th>
                                    <th>Election Code</th>
                                    <th>Election Description</th>
                                    
                                    <th>Election Date</th>
                                    
                                    <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>

                            </tbody>
                        </table>
                        
            </Col>
                </Row>
            </Container>



            <Container>
                <Row>
                    <Col>
                        <table>
                            <tr id="theader">Positions</tr>
                            <tbody>
                                <tr>
                                    <th>Position ID</th>
                                    <th>Position Code</th>
                                    <th>Position Name</th>
                                    
                                    <th>Position Description</th>
                                    
                                    <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>

                            </tbody>
                        </table>
                        
            </Col>
                </Row>
            </Container>
            
            
        </div>
    );
}