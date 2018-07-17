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
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'

// conection react-redux
import { postLoginUser } from '../../redux/actions/userAction'
import { connect } from 'react-redux'

// style
import './style.css'

const API_LOGIN = `http://35.186.150.123:3220/user/login`

class Register extends Component {
    constructor(){
        super()
        this.state = {
            ussername: '',
            password: '',
            redirect: false,
            redirectToReferrer: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state.ussername, ' <--- username')
        // console.log(this.state.password, ' <--- password')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(`${API_LOGIN}`, {
            ussername: this.state.ussername,
            password: this.state.password
        })
        .then((dataUser) => {
            if(dataUser.data === 'usser belum terdaftar'){
                console.log(' <------- Masuk sini 1')
                // console.log(dataUser, ' <---- dataUser 1')
                this.setState({ussername: '', password: '', redirectToReferrer: true})
                Swal({
                    type: 'error',
                    title: 'Akun belum Terdaftar',
                    text: 'silahkan Register terlebih dahulu'
                })
            }else if(dataUser.data.token){
                console.log(' <----- masuk sini 2 ')
                // console.log(dataUser.data.userData, ' <---- dataUser 2')
                let data = dataUser.data.userData
                localStorage.setItem('token', dataUser.data.token)
                localStorage.setItem('username', data.ussername)
                localStorage.setItem('rule', data.rule)
                this.setState({ussername: '', password: '',redirect: true})
                this.props.postUserLoginApi(dataUser.data)
            }
        })
        .catch(()=>{
            console.log(' <------- Masuk sini 3')
            this.setState({ussername: '', password: ''})
            Swal({
                type: 'error',
                title: 'Akun belum Terdaftar',
                text: 'silahkan Register terlebih dahulu'
            })
        })

    }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    //   console.log(from, ' <---- test')
      if(this.state.redirect === true){
          return <Redirect to="/admin" />
      }
    return (
      <Container className="login">
        <Row className="mt-5">
                <Card className="form-style shadow-lg">
                    <div className="text-center">
                        <img className="style-img m-2" src="https://image.flaticon.com/icons/svg/201/201565.svg"  alt="gambar"/>
                    </div>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="ussername"
                                    placeholder="Username"
                                    value={this.state.ussername}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <Button type="Submit" outline color="primary" block>Login</Button>
                                </Col>
                                <Col sm={6}>
                                    <Link to="/admin/signup">
                                        <Button outline color="success" block>
                                            Register
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
        </Row>
      </Container>
    )
  }
};
// from reducer
const mapStateToProps = () => {
    return {

    }
}
// from action
const mapDispatchToProps = (dispatch) => {
    return {
        postUserLoginApi: (dataUserLogin) => dispatch(postLoginUser(dataUserLogin))
    }
}

const RegiterToConnection = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegiterToConnection
