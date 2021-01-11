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
               
                <div className="stretched_card mt-4 col-lg-9">
                  <div className = "card">
                    <div className = "cardbody">
                      <h4 className="card_title">Hạch Toán theo chế độ kế toán</h4>
                      <div className ="pl-5">
                        <div>
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                          <h5>
                            Thông tư 133/2016/TT-BTC(Thay thế QĐ 48...)
                          </h5>
                        </div>
                       
                        <div>
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                          <h5>
                            Thông tư 200/2014/TT-BTC(Thay thế QĐ 15...)
                          </h5>
                        </div>       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stretched_card mt-4 col-lg-3">
                  <div className="card">
                    <div className="card_body">
                      <h4 className="card_title">Hình thức sổ sách</h4>
                      <div className ="pl-5">
                        <div>
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                          <h5>
                            Nhật ký chung
                          </h5>
                        </div>

                        <div>
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                          <h5>
                            Chứng từ ghi sổ 
                          </h5>
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
                    <h4 className="card_title">Phương Pháp tính giá xuất kho</h4>
                    <div className ="pl-5">
                      <div>
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <h5>
                          Giá bình quân gia quyền cuối kỳ ( tính đến cuối bảng: mỗi tháng sẽ xuát kho cùng 1 giá)
                        </h5>
                      </div>

                      <div>
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <h5>
                          Giá bình quân gia quyền tại thời điểm xuất kho ( thời điểm được tính đến cuối Ngày Ghi Sổ)
                        </h5>
                      </div>
                    </div>               
                  </div>  
                </div>
              </div>
            </div>
          </fieldset>

          <div className="reply_btn pull-right mb-mob-3">
              <Button type="button" color="secondary" className="btn-fixed-w mb-3 mr-2">
                <i className="ion-ios-conform"></i>
                  Conform
              </Button>
              <Button type="button" color="danger" className="btn-fixed-w mb-3 mr-2">
                <i className="ion-ios-trash"></i>
                  Delete
              </Button>
          </div>      
        </form>
        )
    }
}


export default Tables
