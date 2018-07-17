import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup,
    Badge,
    Col,
    Row,
    Popover,
    PopoverHeader,
    PopoverBody
 } from 'reactstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'


// file css
import './style.css'

// component
// import SearchTitle from '../pages/client/searchTitle/SearchTitle'

export default class HeaderClient extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleHover = this.toggleHover.bind(this);

        this.state = {
            isOpen: false,
            cart:[],
            // search in under
            allProduct: [],
            query: '',
            buttonSearch: [],
            // popHover
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    setStorage = ()=>{
        localStorage.setItem('cartNavbar', JSON.stringify(this.props.dataCart))
    }

    getItem = ()=>{
        console.log(' <----- 1')
        if(localStorage.getItem('cart') != null){

            let cartData = JSON.parse(localStorage.getItem('cart'))
            this.setState({
                cart: cartData
            })
            console.log(JSON.parse(localStorage.getItem('cart')).length, ' <---use didUpdate 1')
        }


    }


    // ####### make search ######
    componentDidMount(){
        this.getInfo()
        this.getItem()
    }

    getInfo(){
        axios.get('http://localhost:3030/product/')
        .then((dataProduct)=>{
            this.setState({
                allProduct: dataProduct.data
            })
            console.log(this.state.allProduct, ' <----- all product')
        })
    }



    inputHandleChange = (e) => {
        // console.log(e.target.value, ' <----- search')
        this.setState({
            query: e.target.value
        })
        // console.log(this.state.query, '<----query')
    }

    searchingFor(query){
        return (x) => {
            return x.title.toLowerCase().includes(query.toLowerCase() || !query)
        }
    }

    clearSearch(){
        this.setState({
            query: ''
        })
    }

    // button search

    buttonSearch =()=>{
        axios.get(`http://localhost:3030/product/title/${this.state.query}`)
        .then((resultQuery)=>{
            // console.log(resultQuery.data, ' <---- resultquery')
            window.location.href = `http://localhost:3000/${this.state.query}`
            localStorage.setItem('dataTitle', JSON.stringify(resultQuery.data))

        })
        .catch((err) => {
            console.log(err, ' <---- err')
        })
    }

    // ###### popHover #####
    toggleHover() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }


    render (){
        var result = 0;
        return (
            <div>
                <Navbar color="light" light expand="md" className="navbar-style fixed-top">
                <NavbarBrand href="/">
                    <img src="https://image.flaticon.com/icons/svg/718/718943.svg" style={{width: '15%', height: 'auto' }}  alt="gambar"/>
                    <span style={{ color: "white" }}> toko online</span>
                </NavbarBrand>
                <Nav>
                    {/* Search */}
                        <Row>
                            <Col xs={10}>
                                <Form inline className="search-style" onSubmit={this.buttonSearch} >
                                    <FormGroup >
                                        <Input
                                            type="text" placeholder="serch" className="input-style"
                                            onChange={this.inputHandleChange}
                                        />
                                    </FormGroup>
                                    {/* button search */}
                                        <i
                                            className="fas fa-search text-dark"
                                            onClick={this.buttonSearch}
                                            type="Submit"
                                        ></i>
                                    {this.state.query !== '' && (
                                        <span className="style-dropdownSearch" style={{display: 'block' }} >
                                        {this.state.allProduct.filter(this.searchingFor(this.state.query)).map((listProduct)=>{
                                                return (
                                                    <div>
                                                        <Link to={`/${listProduct.title}/${listProduct._id}`} className="list-style" style={{display: "block"}} onClick={this.clearSearch}>
                                                            {listProduct.title}
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </span>
                                    )}
                                </Form>
                            </Col>
                            <Col xs={2} >
                                <i className="fas fa-shopping-cart align-middle"
                                    id="Popover1" onClick={this.toggleHover}
                                >
                                    <Badge color="primary">
                                        {
                                            // JSON.parse(localStorage.getItem('cart')).length
                                            this.state.cart.length
                                        }
                                    </Badge>
                                </i>
                                {/* pophover */}
                                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                    <PopoverHeader>
                                        Total barang : {this.state.cart.length}
                                    </PopoverHeader>
                                {this.state.cart.map((listProduct, idx) => {
                                    return(
                                        <div key={idx}>
                                            <PopoverBody>
                                                        <div>
                                                            <img src={listProduct.image} style={{ width: '20%' }}  alt="gambar"/>
                                                            <span>{listProduct.title} </span>
                                                            <span style={{color: 'red' }} > Rp.{listProduct.price}</span>
                                                        </div>
                                            </PopoverBody>
                                            {console.log(result += listProduct.price)}

                                        </div>
                                    )
                                })}
                                    <p>
                                        Total Harga  <span style={{color: 'red'}} > Rp.{result}</span>
                                     </p>
                                    <PopoverHeader style={{color: 'red'}}>
                                        <Link to='/cart/carts/checkout' >
                                            lihat semuanya
                                        </Link>
                                    </PopoverHeader>
                                </Popover>
                                {/* /end/ pophover */}
                            </Col>
                            </Row>

                    {/* <Search */}
                </Nav>


                <Nav>
                    <NavItem>
                            <NavLink>


                            </NavLink>
                        </NavItem>
                </Nav>
                <br /><br />


                </Navbar>
                {/* <SearchTitle dataTitle={this.state.buttonSearch} /> */}
            </div>
        )
    }
}