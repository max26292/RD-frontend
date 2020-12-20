/* eslint-disable react/require-render-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import { DataType } from 'app/containers/InitialDeclaration/types';
interface Props {
    activeAuthLayout?: boolean;
}

interface State {
    checked: boolean;
    activateAuthLayout?:boolean;
}

class DataTable extends React.Component <Props,State> {
    private tableData: DataType; // khai bao bien table data
    constructor(props:Props) {
        super(props);
        this.state = {
            checked: false
        }; 
    }

    componentDidMount() {
        this.setState({activateAuthLayout:false});
    }       

    

    render() {
        this.tableData = {
            columns: [
                {
                    label: 'Name of Business',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Adress',
                    field: 'adress',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Phone',
                    field: 'phone',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'TaxID',
                    field: 'taxid',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Name of Director',
                    field: 'name of director',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Name of Head of Accountant',
                    field: 'name of head of account',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Name of Material curator ',
                    field: 'name of material curator',
                    sort: 'asc',
                    width: 150
                },  
                {
                    label: 'Name of Inventory Manager ',
                    field: 'name of inventory manager',
                    sort: 'asc',
                    width: 150
                },  
                {
                    label: 'Name of people who sign on behave of director  ',
                    field: 'name of people who sign on behave of director',
                    sort: 'asc',
                    width: 150
                }
            ],
            

            rows: [
                {
                    name: 'Tiger Nixon',
                    position: 'System Architect',
                    office: 'Edinburgh',
                    age: '61',
                    date: '2011/04/25',
                    salary: '$320',
                  },
                  {
                    name: 'Garrett Winters',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '63',
                    date: '2011/07/25',
                    salary: '$170',
                  },
                  {
                    name: 'Ashton Cox',
                    position: 'Junior Technical Author',
                    office: 'San Francisco',
                    age: '66',
                    date: '2009/01/12',
                    salary: '$86',
                  },
                  {
                    name: 'Cedric Kelly',
                    position: 'Senior Javascript Developer',
                    office: 'Edinburgh',
                    age: '22',
                    date: '2012/03/29',
                    salary: '$433',
                  }, 
            ]
        };

        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <h4 className="card_title">DATA TABLE DEFAULT</h4>
                                <div className="datatable_container">
                                    <MDBDataTable
                                        responsive
                                        bordered
                                        data={this.tableData}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-4">
                        <Card>
                            <CardBody>
                                <h4 className="card_title">Stripped DATA TABLE</h4>
                                <div className="datatable_container">
                                    <MDBDataTable
                                        responsive
                                        striped
                                        data={this.tableData}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default DataTable;