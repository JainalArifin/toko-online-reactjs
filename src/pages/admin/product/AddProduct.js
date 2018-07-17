import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import Axios from 'axios'
import Swal from 'sweetalert2'

const API_TOKO_ONLINE = `http://35.186.150.123:3220/product`
// const API_LOCAL = 'http://localhost:3220/product'

export default class AddProduct extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            price: '',
            image: '',
            description: ''
        }
        this.addData = this.addData.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addData = async(e) => {
        e.preventDefault()
        Axios.post(API_TOKO_ONLINE, {
            title: this.state.title,
            price: this.state.price,
            image: this.state.image,
            description: this.state.description,
        })
        .then((result)=>{
            console.log(' <------ 1')
            console.log(result, ' <---- ini result')
            Swal(
                'Good job!',
                'You clicked the button!',
                'success'
            )
            this.setState({
                title: '',
                price: '',
                image: '',
                description: ''
            })

        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    render (){
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="p-2">
                            <CardHeader>
                                <p>Add Product</p>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.addData}>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>
                                            Name Product
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                            type="text"
                                            name="title"
                                            placeholder="name product or title your product ..."
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                            required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="" sm={2}>
                                            Price
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                            type="number"
                                            name="price"
                                            placeholder="price your product ..."
                                            onChange={this.handleChange}
                                            value={this.state.price}
                                            required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="" sm={2}>
                                            Image
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                            type="text"
                                            name="image"
                                            placeholder="Link image ..."
                                            onChange={this.handleChange}
                                            value={this.state.image}
                                            required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleText" sm={2}>
                                            Description
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="textarea"
                                                name="description"
                                                onChange={this.handleChange}
                                                value={this.state.description}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button type="Submit" >Add New Product</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}