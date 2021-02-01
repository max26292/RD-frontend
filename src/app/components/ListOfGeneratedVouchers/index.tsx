/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  ButtonGroup,
  Button,
  Container,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ activateAuthLayout: false });
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Ngày',
          field: 'number',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Ctgs',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Số CTừ',
          field: 'number',
          sort: 'asc',
          width: 200,
        },

        {
          label: 'Ngày',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Diễn Giải',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'TK Nợ',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'CTiết',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'TK Có',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'CTiết',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Số Lượng',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Đơn Giá',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Số Tiền VND',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Nguyên Tệ',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Tỷ Giá',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'HĐơn',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'KKBS',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Seri',
          field: '',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Số HD',
          field: 'number',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Ngày HD',
          field: '',
          sort: 'asc',
          width: 270,
        },
      ],
      rows: [
        {
          name: 'Jonas Alexander',
          position: 'Developer',
          office: 'San Francisco',
          age: '30',
          date: '2010/07/14',
          salary: '$86',
        },
        {
          name: 'Shad Decker',
          position: 'Regional Director',
          office: 'Edinburgh',
          age: '51',
          date: '2008/11/13',
          salary: '$183',
        },
        {
          name: 'Michael Bruce',
          position: 'Javascript Developer',
          office: 'Singapore',
          age: '29',
          date: '2011/06/27',
          salary: '$183',
        },
        {
          name: 'Donna Snider',
          position: 'Customer Support',
          office: 'New York',
          age: '27',
          date: '2011/01/25',
          salary: '$112',
        },
      ],
    };

    return (
      <>
        <React.Fragment>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <h4 className="card_title">Type of Vouchers:</h4>
                  <div className="datatable_container">
                    <MDBDataTable responsive bordered data={data} />
                  </div>

                  <div className="table table-bordered dataTable">
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Số CTừ
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>

                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Ngày
                            <div className="form-group">
                              <input type="date" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Họ & Tên
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={12} md={8}>
                            {/* <div className="form-inline"> */}
                            Diễn Giải
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Địa Chỉ
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={12} md={8}>
                            {/* <div className="form-inline"> */}
                            Ctừ Kèm
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="table table-bordered dataTable">
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Loạihđ
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>

                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Số hđơn
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Ms Thuế
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Địa Chỉ
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Số Seri
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>

                          <Col xs={3} md={2}>
                            {/* <div className="form-inline"> */}
                            Ngày
                            <div className="form-group">
                              <input type="date" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Đơn Vị
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                          <Col xs={6} md={4}>
                            {/* <div className="form-inline"> */}
                            Mặt Hàng
                            <div className="form-group ">
                              <input type="text" className="form-control" />
                            </div>
                            {/* </div> */}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="table table-bordered dataTable">
                    <div className="row">
                      <div className="stretched_c ard col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Number
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="number"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Price
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Money
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Currency
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Currency
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Currency
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Currency
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="text"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                          </div>
                        </div>
                      </div>

                      <div className="stretched_c ard col-lg-4">
                        <div className="card">
                   
                          <div className="card-body">
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="number"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                               Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="" sm={3}>
                                Số Cuối
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  name="shit"
                                  id=""
                                  placeholder=""
                                />
                              </Col>
                            </FormGroup>
                          </div>
                        </div>
                        <div className="stretched_c ard col-lg-4">
                          <div className="card">
                          
                            <div className="card-body">
                              <FormGroup row>
                                <Label for="" sm={3}>
                                  Ngày-Tháng-Năm
                                </Label>
                                <Col sm={9}>
                                  <Input
                                    type="date"
                                    name="number"
                                    id=""
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label for="" sm={3}>
                                  Phần Thập Phân
                                </Label>
                                <Col sm={9}>
                                  <Input
                                    type="number"
                                    name="shit"
                                    id=""
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Label for="" sm={3}>
                                  Hàng Ngàn Triệu
                                </Label>
                                <Col sm={9}>
                                  <Input
                                    type="number"
                                    name="shit"
                                    id=""
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>                           
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      </>
    );
  }
}

export default withRouter<any,any>(connect(null, { activateAuthLayout })(DataTable));
