/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';

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
              <legend >Hạch Toán theo chế độ kế toán </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Thông tư 133/2016/TT-BTC(Thay thế QĐ 48...)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Thông tư 200/2014/TT-BTC(Thay thế QĐ 15...)
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <legend >Hình thức sổ sách</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Nhật ký chung
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Chứng từ ghi sổ 
                  </label>
                </div>
              </div>
            </div>

            
            <div className="row">
              <legend > Phương Pháp tính giá xuất kho </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Giá bình quân gia quyền cuối kỳ (tính đến cuối bảng: mỗi tháng sẽ xuát kho cùng 1 giá)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Giá bình quân gia quyền tại thời điểm xuất kho(thời điểm được tính đến cuối Ngày Ghi Sổ)
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <Button type="submit">Submit </Button> <br />
          <Button type="submit">Delete </Button>
        </form>
        )
    }
}


export default Tables
