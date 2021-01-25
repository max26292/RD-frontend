/* eslint-disable react/require-render-return */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { MDBDataTable } from 'mdbreact';
import { DataType } from 'app/containers/InitialDeclaration/types';

interface Props {
  activeAuthLayout?: boolean;
}

interface State {
  checked: boolean;
  activateAuthLayout?: boolean;
  toggle: boolean;
  activeTab: string;
  activeTab3: string;
  activeTab_border: string;
  activeTab_border1: string;
  col1: boolean;
  col2: boolean;
  col3: boolean;
  col5: boolean;
}

class DataTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: '1',
      activeTab3: '9',
      activeTab_border: '9',
      activeTab_border1: '13',
      col1: true,
      col2: false,
      col3: false,
      col5: true,
      checked: false,
      toggle: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggle3 = this.toggle3.bind(this);

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col5 = this.t_col5.bind(this);

    this.t_border = this.t_border.bind(this);
    this.t_border1 = this.t_border1.bind(this);
  }

  componentDidMount() {
    this.setState({ activateAuthLayout: false });
  }

  t_col1() {
    this.setState({ col1: !this.state.col1 });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2 });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3 });
  }
  t_col5() {
    this.setState({ col5: !this.state.col5 });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  toggle3(tab) {
    if (this.state.activeTab3 !== tab) {
      this.setState({
        activeTab3: tab,
      });
    }
  }
  t_border(tab) {
    if (this.state.activeTab_border !== tab) {
      this.setState({
        activeTab_border: tab,
      });
    }
  }
  t_border1(tab) {
    if (this.state.activeTab_border1 !== tab) {
      this.setState({
        activeTab_border1: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12" className="stretched_card mt-4">
            <Card>
              <CardBody>
                <h4 className="card_title">Initial Declaration</h4>
                <Nav pills>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === '9',
                      })}
                      onClick={() => {
                        this.toggle3('9');
                      }}
                    >
                      <i className="ti-home"></i> Business Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === '10',
                      })}
                      onClick={() => {
                        this.toggle3('10');
                      }}
                    >
                      <i className="ti-user"></i> Accounting regulations
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === '11',
                      })}
                      onClick={() => {
                        this.toggle3('11');
                      }}
                    >
                      <i className="ti-mobile"></i> Decimal odd number
                    </NavLink>
                  </NavItem>
                </Nav>
                <Form>
                  <TabContent activeTab={this.state.activeTab3}>
                    <TabPane tabId="9" className="p-3 pl-0">
                      <Row>
                        <Col md="4">
                          {' '}
                          <h5>Name of Business:</h5>{' '}
                        </Col>
                        <Col md="8">
                          {' '}
                          <input
                            type="text"
                            placeholder="Name of Business"
                          />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          {' '}
                          <h5>Adress:</h5>{' '}
                        </Col>
                        <Col md="8">
                          {' '}
                          <input type="text" placeholder="Adress" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Phone:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Phone Number" />
                        </Col>
                        <Col>
                          <h5>Fax:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Fax" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Tax ID:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Tax ID" />
                        </Col>
                        <Col>
                          <h5>Email:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Email" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Name of Director:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Name of Director" />
                        </Col>
                        <Col>
                          <h5>-----</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="position" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Name of Head of Accountant:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Name" />
                        </Col>
                        <Col>
                          <h5>-----</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="position" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Name of Material curator:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Name" />
                        </Col>
                        <Col>
                          <h5>-----</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="position" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <h5>Name of Inventory Manager:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Name" />
                        </Col>
                        <Col>
                          <h5>Storekeepers:</h5>
                        </Col>
                        <Col>
                          {' '}
                          <input type="text" placeholder="Name" />{' '}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="8">
                          {' '}
                          <h5>
                            Name of people who sign on behave of director:
                          </h5>{' '}
                        </Col>
                        <Col md="4">
                          {' '}
                          <input type="text" placeholder="Name" />{' '}
                        </Col>
                      </Row>
                      <div className="reply_btn pull-right mb-mob-3">
                        <Button
                          type="button"
                          color="primary"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-conform"></i>
                          Conform
                        </Button>
                        <Button
                          type="button"
                          color="danger"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-trash"></i>
                          Delete
                        </Button>
                      </div>
                    </TabPane>

                    <TabPane className="p-3 pl-0" tabId="10">
                      <fieldset className="form-group">
                        <div className="row">
                          <div className="stretched_card mt-4 col-lg-9">
                            <div className="card">
                              <div className="cardbody">
                                <h4 className="card_title">
                                  Hạch Toán theo chế độ kế toán
                                </h4>
                                <div className="pl-5">
                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios1"
                                      value="option1"
                                      checked
                                    />
                                    <h5>
                                      Thông tư 133/2016/TT-BTC(Thay thế QĐ
                                      48...)
                                    </h5>
                                  </div>

                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios2"
                                      value="option2"
                                    />
                                    <h5>
                                      Thông tư 200/2014/TT-BTC(Thay thế QĐ
                                      15...)
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="stretched_card mt-4 col-lg-3">
                            <div className="card">
                              <div className="card_body">
                                <h4 className="card_title">
                                  Hình thức sổ sách
                                </h4>
                                <div className="pl-5">
                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios1"
                                      value="option1"
                                      checked
                                    />
                                    <h5>Nhật ký chung</h5>
                                  </div>

                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios2"
                                      value="option2"
                                    />
                                    <h5>Chứng từ ghi sổ</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="stretched_card mt-4 col-lg-12">
                            <div className="card">
                              <div className="card_body">
                                <h4 className="card_title">
                                  Phương Pháp tính giá xuất kho
                                </h4>
                                <div className="pl-5">
                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios1"
                                      value="option1"
                                      checked
                                    />
                                    <h5>
                                      Giá bình quân gia quyền cuối kỳ ( tính đến
                                      cuối bảng: mỗi tháng sẽ xuát kho cùng 1
                                      giá)
                                    </h5>
                                  </div>

                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="gridRadios"
                                      id="gridRadios2"
                                      value="option2"
                                    />
                                    <h5>
                                      Giá bình quân gia quyền tại thời điểm xuất
                                      kho ( thời điểm được tính đến cuối Ngày
                                      Ghi Sổ)
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <div className="reply_btn pull-right mb-mob-3">
                        <Button
                          type="button"
                          color="primary"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-conform"></i>
                          Conform
                        </Button>
                        <Button
                          type="button"
                          color="danger"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-trash"></i>
                          Delete
                        </Button>
                      </div>
                    </TabPane>
                    <TabPane className="p-3 pl-0" tabId="11">
                      <div className="row">
                        <div className="stretched_c ard col-lg-4">
                          <div className="card">
                            <h4 className="card-header">
                              {' '}
                              Số chữ số lẻ thập phân
                            </h4>
                            <div className="card-body">
                              <FormGroup row>
                                <Label for="" sm={3}>
                                  Number
                                </Label>
                                <Col sm={9}>
                                  <Input
                                    type="number"
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
                                    type="number"
                                    name="shit"
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
                                    type="number"
                                    name="shit"
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

                        <div className="stretched_c ard col-lg-4">
                          <div className="card">
                            <h4 className="card-header">
                              {' '}
                              Mẫu Xem
                            </h4>
                            <div className="card-body">
                              <FormGroup row>
                             
                                <Col sm={9}>
                                  <Input 
                                    type="number"
                                    name="number"
                                    id=""
                                    placeholder=""
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                          
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

                        <div className="stretched_c ard col-lg-4">
                          <div className="card">
                            <h4 className="card-header">
                              {' '}
                              Dấu Phân Cách
                            </h4>
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

                      <div className="reply_btn pull-right mb-mob-3">
                        <Button
                          type="button"
                          color="primary"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-conform"></i>
                          Conform
                        </Button>
                        <Button
                          type="button"
                          color="danger"
                          className="btn-fixed-w mb-3 mr-2"
                        >
                          <i className="ion-ios-trash"></i>
                          Delete
                        </Button>
                      </div>
                    </TabPane>
                  </TabContent>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DataTable;
