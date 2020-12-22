/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

class Tables extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users : [
        ],
      }
    }
    render() {
        return (
          
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th> Name of Business </th> 
                                <td>
                                    <input type ="text"  placeholder="Name of Business" />
                                </td> 
                        
                        </tr>

                        <tr>
                            <th>Adress</th>
                                <td>
                                    <input type ="text"  placeholder="Adress" />
                                </td> 
                        </tr>

                        <tr>
                            <th>Phone </th>
                                <td>
                                    <input type ="text"  placeholder="Phone Number" /> Fax : <input type ="text"  placeholder="Fax" />
                                </td> 
                        </tr>

                        <tr>
                            <th>Tax ID </th>
                                <td>
                                    <input type ="text"  placeholder="Tax ID" /> Email : <input type ="text"  placeholder=" Email" />
                                </td> 
                        </tr>

                        <tr>
                            <th> Name of Director </th>
                                <td>
                                    <input type ="text"  placeholder="Name" /> -----> <input type ="text"  placeholder=" position" />
                                </td> 
                        </tr>

                        <tr>
                            <th> Name of Head of Accountant </th>
                                <td>
                                    <input type ="text"  placeholder="Name" /> -----> <input type ="text"  placeholder=" position" />
                                </td> 
                        </tr>

                        <tr>
                            <th> Name of Material curator </th>
                                <td>
                                    <input type ="text"  placeholder="Name" /> -----> <input type ="text"  placeholder=" position" />
                                </td> 
                        </tr>

                        <tr>
                            <th> Name of Inventory Manager </th>
                                <td>
                                    <input type ="text"  placeholder="Name" /> storekeepers : <input type ="text"  placeholder=" Name" />
                                </td> 
                        </tr>

                        <tr>
                            <th> Name of people who sign on behave of director </th>
                                <td>
                                    <input type ="text"  placeholder="Name" />
                                </td> 
                        </tr>
                   
                    </tbody>  
                </table>
            </form>
                
  
        )
    }
}


export default Tables
