/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser, emptyError } from '../../store/actions';
// import Logo from '../../assets/images/logo-login.svg';
import { AvForm, AvField } from 'availity-reactstrap-validation';


interface Props {
    registerUser : any
    user: string
    registrationError: any
    loading: any
}

interface State {
    username: string
    email: string
    password: string

}

const registerUSer = () => {

}

class Pagesregister extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
      
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.registerUser (values)
    }

    handleInvalidSubmit(event, errors, values) {
        this.props.registerUser({email: values.email});
      }

   


    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="container-fluid">
                        <Row>
                            {/* <div className="login-bg">
                                <div className="login-overlay"></div>
                                <div className="login-left">
                                    <img src={Logo} alt="Logo" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit.</p>
                                    <button className="btn btn-primary">Learn More</button>
                                </div>
                            </div> */}

                            <div className="login-form">
                                <AvForm id="login_form_sec" onValidSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit}> 
                                    <div className="login-form-body">
                                        {this.props.user && <Alert color="success">
                                            Registration Done Successfully.</Alert>}

                                        {this.props.registrationError && <Alert color="danger">
                                            {this.props.registrationError}</Alert>}

                                        <div className="mb-0">
                                            <AvField name="username" label="Username" value={this.state.username} placeholder="Enter Username" type="text" required />
                                        </div>
                                        <div className="mb-0">
                                            <AvField name="email" label="Email" value={this.state.email} placeholder="Enter Email Address" validate={{email: true}} type="text" required />
                                        </div>
                                        <div>
                                            <AvField name="password" label="Password" value={this.state.password} placeholder="Enter Password" type="password" required />
                                        </div>
                                        
                                        <div className="submit-btn-area">
                                            {this.props.loading ? <Button color="primary" className="btn btn-primary">Loading ...</Button> :
                                                <Button color="primary" className="btn btn-primary" type="submit">Submit <i className="ti-arrow-right"></i></Button>}
                                            <div className="login-other row mt-4">
                                                <Col sm="6">
                                                    <button className="fb-login"><span className="login_txt">Log in with</span>  <i className="fa fa-facebook"></i></button>
                                                </Col>
                                                <Col sm="6">
                                                    <button className="google-login"><span className="login_txt">Log in with</span>  <i className="fa fa-google"></i></button>
                                                </Col>
                                            </div>
                                        </div>
                                        <div className="form-footer text-center mt-5">
                                            <p className="text-muted">Have an Account? <Link to="/login"><i className="mdi mdi-lock"></i> Login Now</Link></p>
                                        </div>
                                    </div>
                                </AvForm>
                            </div>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {

    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
}

export default connect(mapStatetoProps, { registerUSer })(Pagesregister);

