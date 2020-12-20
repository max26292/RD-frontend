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
    private tableDate: DataType;
    constructor(props:Props) {
        super(props);
        this.state = {
            checked: false
        };

        

        console.log(this.props);
    }

    componentDidMount() {
        this.setState({activateAuthLayout:false});
    }       

    

    render() {
        this.tableDate = {
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
                                        data={data}
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
                                        data={data}
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