/* eslint-disable react/require-render-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import { DataType } from 'app/containers/InitialDeclaration/types';

class FormBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ activateAuthLayout: false });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="card_title">Starting Year</h4>
                <Form>
                  <form className="form-inline">
                    <div className="form-group">
                      <label>Year: </label>
                      <input
                        type="number" // tăng số bằng mũi tên
                        className="form-control mx-sm-3"
                        aria-describedby="passwordHelpInline"
                      />

                      <button
                        type="button"
                        className="btn-fixed-w mr-2 btn btn-primary"
                      >
                        Xác Nhận
                      </button>

                      <button
                        type="button"
                        className="btn-fixed-w mr-2 btn btn-primary"
                      >
                        Hủy Bỏ
                      </button>
                    </div>
                  </form>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter<any,any>(connect(null, { activateAuthLayout })(FormBasic));
