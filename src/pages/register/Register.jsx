import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
} from 'reactstrap'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Redirect, Link } from 'react-router-dom'

// style
import './style.css'

const API_REGISTER = 'http://35.186.150.123:3220/user/register'
const regexNumber = new RegExp("^(?=.*[0-9])")
const regexUpperCase = new RegExp("^(?=.*[A-Z])")

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            ussername:'',
            password: '',
            role: 'admin',
            ussernameRule: false,
            passwordRule: false,
            redirect: false,
            passwordNumber: false,
            passwordUppercase: false
        }
    }

    handleChange = async(e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
        console.log(typeof this.state.password, ' <---- type password')
        if(this.state.ussername.length < 6 ){
            this.setState({
                ussernameRule: true,
            })
        }else{
            this.setState({
                ussernameRule: false
            })
        }
        if(this.state.password.length < 8 ){
            this.setState({
                passwordRule: true,
            })
        }else{
            this.setState({
                passwordRule: false
            })
        }
        if(regexUpperCase.test(this.state.password) === true){
            this.setState({
                passwordUppercase: true
            })
        }else{
            this.setState({
                passwordUppercase: false
            })
        }
        if(regexNumber.test(this.state.password) === true){
            this.setState({
                passwordNumber: true
            })
        }else{
            this.setState({
                passwordNumber: false
            })
        }

    }

    handleSubmit = (e) =>{
        // console.log('data masuk ' + this.state.ussername)
        e.preventDefault()
        // console.log(this.state.ussername.length, ' <--- leng')
        // console.log(this.state.ussernameRule, ' <--- passwordRule')
            if(this.state.ussername.length < 6 ){
                console.log(' ok ---> 1')
                this.setState({
                    ussernameRule: true,
                })
            }else{
                this.setState({
                    ussernameRule: false
                })
            }
            if(this.state.password.length < 8 ){
                console.log(' ok ---> 2')
                this.setState({
                    passwordRule: true,
                })
            }else{
                this.setState({
                    passwordRule: false
                })
            }
            if(this.state.ussername.length >= 6 && this.state.password.length >= 8){
                if(regexUpperCase.test(this.state.password) === true){
                    this.setState({
                        passwordUppercase: false
                    })
                }else{
                    this.setState({
                        passwordUppercase: true
                    })
                }
                if(regexNumber.test(this.state.password) === true){
                    this.setState({
                        passwordNumber: false
                    })
                }else{
                    this.setState({
                        passwordNumber: true
                    })
                }
                if(regexNumber.test(this.state.password) === true && regexUpperCase.test(this.state.password) === true){
                    Axios.post(`${API_REGISTER}`, {
                        ussername: this.state.ussername,
                        password: this.state.password,
                        rule: this.state.role
                    })
                    .then(()=>{
                        this.setState({
                            ussername:'',
                            password: '',
                            role:'',
                            ussernameRule: false,
                            passwordRule: false,
                            passwordNumber:false,
                            passwordUppercase:false,
                            redirect: true
                        })
                        Swal(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        )

                    })
                }

            }
    }

  render() {
      if(this.state.redirect === true){
        return <Redirect to="/admin/login" />
      }
    return (
      <Container className="register">
        <Row className="mt-5">
            {/* <Col xs="12"> */}
                <Card className="form-style shadow-lg">
                    <div className="text-center">
                        <img className="style-img m-2" src="https://image.flaticon.com/icons/svg/201/201565.svg"  alt="gambar"/>
                    </div>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                {this.state.ussernameRule === true && (
                                    <p style={{color:'red'}}> username harus 6 huruf atau lebih </p>
                                )}
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="ussername"
                                    value={this.state.ussername}
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>

                                    <Label>
                                         Password harus memiliki Type number 1 &nbsp;
                                         {this.state.passwordNumber === false && (
                                            <i class="far fa-times-circle text-danger"></i>
                                        )}
                                        {this.state.passwordNumber === true && (
                                            <i className="far fa-check-circle text-primary"></i>
                                        )}
                                    </Label>
                                    <br />
                                    <Label>
                                        Password harus memiliki 1 huruf besar &nbsp;
                                        {this.state.passwordUppercase === false && (
                                            <i class="far fa-times-circle text-danger"></i>
                                        )}
                                        {this.state.passwordUppercase === true && (
                                            <i className="far fa-check-circle text-primary"></i>
                                        )}
                                    </Label>
                                    <br />
                                    {this.state.passwordRule === true && (
                                        <p style={{ color:'red' }}>Password harus 8 karakter atau lebih</p>
                                    )}

                                <Label>password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="password"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">User Select</Label>
                                <Input type="select" name="role" value={this.state.role} onChange={this.handleChange}>
                                    <option value="admin">Admin</option>
                                    <option value="pelapak">pelapak</option>
                                </Input>
                            </FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <Link to="/admin/login">
                                        <Button type="Submit" outline color="primary" block
                                    >Login</Button>
                                    </Link>
                                </Col>
                                <Col sm={6}>
                                        <Button
                                            outline
                                            color="success"
                                            block
                                            type="Submit"
                                        >Register</Button>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            {/* </Col> */}
        </Row>
      </Container>
    )
  }
};
