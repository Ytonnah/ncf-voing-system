import { Col, Container, Row } from "react-bootstrap";
import '/admn_pnl.css'

export default function Dashboard(){
    //admin dashboard
    //create a separate react project for server


    return(
        <div>
            <h1>Admin Dashboard view</h1>
            <table style={{border:"1px solid black"}}>
                <thead>Elections</thead>
                <tbody style={{border:"1px solid black"}}>
                    <tr>
                        <th>Election ID</th>
                        <th>Election Description</th>
                        <th>Election Year</th>
                        <th>Election Description</th>
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
        </div>
    );
}