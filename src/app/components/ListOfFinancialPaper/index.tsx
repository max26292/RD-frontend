/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, Button } from 'reactstrap';
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
          label: 'Mã',
          field: 'id',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Tên Loại Chứng Từ',
          field: 'name',
          sort: 'asc',
          width: 270,
        },
      ],
      rows: [
        
      ],
    };

    return (
      <>
        <React.Fragment>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <h4 className="card_title">Declaration List of Work</h4>
                  <div className="datatable_container">
                    <MDBDataTable responsive bordered data={data} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div className="reply_btn pull-left">
            <Button
              type="button"
              color="primary"
              className="btn-fixed-w mb-3 mr-2"
            >
              <i className="ion-plus"></i>
              Add
            </Button>
            <Button
              type="button"
              color="primary"
              className="btn-fixed-w mb-3 mr-2"
            >
              <i className="ion-wrench"></i>
              Fix
            </Button>
            <Button
              type="button"
              color="primary"
              className="btn-fixed-w mb-3 mr-2"
            >
              <i className="ion-ios-trash"></i>
              Delete
            </Button>
          </div>
          <div className="reply_btn pull-right mb-mob-3">
            <Button
              type="button"
              color="danger"
              className="btn-fixed-w mb-3 mr-2"
            >
              End
            </Button>
          </div>
        </React.Fragment>
      </>
    );
  }
}

export default withRouter<any,any>(connect(null, { activateAuthLayout })(DataTable));
