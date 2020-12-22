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
          <fieldset className="form-group">
            <div className="row">
              <legend >Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Second radio
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">


          </div>
        </form>
        )
    }
}


export default Tables
