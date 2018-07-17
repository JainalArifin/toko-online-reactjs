import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Swal from 'sweetalert2'

// css
import './custom.css'

// layout
import HeaderClient from '../../../components/Layout/HeaderClient/HeaderClient'
import FooterClient from '../../../components/Layout/FooterClient/FooterClient'
import ScrollButton from '../../../components/Layout/ScroolButton/ScrollButton'


export default class CheckOut extends Component{
    constructor(){
        super()
        this.state = {
            resultProduct: []
        }
    }

    getData = () => {
        if(localStorage.getItem('cart') != null){
            let dataProduct =  JSON.parse(localStorage.getItem('cart'))
            // console.log(dataProduct, ' <----- data')
            this.setState({
                resultProduct: dataProduct
            })
        }
    }

    componentDidMount(){
        this.getData()
    }

    handleBayar(){
        localStorage.removeItem('cart')
        Swal({
            title: 'Terimakasih sudah berbelanja',
            animation: true,
        }).then(()=>{
            window.location.href = '/'
        })
    }

    handleDelete = (x)=>{
        // swal
        Swal({
            title: 'apakah kamu yakin ?',
            text: "Kamu ingin menghapus item ini!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'hapus!'
        }).then((result) => {
            // console.log(Swal, ' <---- test')


            if (result.value) {
                this.state.resultProduct.splice(x, 1)
                localStorage.setItem('cart', JSON.stringify(this.state.resultProduct))
                this.getData()
                Swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
        // console.log(x, ' <---- x')

    }

    render () {
        var result = 0;
        return (
            <div>
                <HeaderClient />

            <div style={{ marginTop: '200px' }} >
                <Container>
                    <Row>
                        <Col sm={8}>
                        {this.state.resultProduct.map((listProduct, idx) => {
                                return (
                                    <div className="bg-white shadow-lg mb-3"  >
                                        <div className=" p-2 text-dark" style={{ backgroundColor: '#FAFAFA' }}>
                                            <i className="fas fa-cart-arrow-down"></i>
                                            <span> Harga hemat dompet pas</span>
                                        </div>
                                        <Row className="checkout-style">
                                            <Col sm={3}>
                                                <img src={listProduct.image}  style={{ width: '50%' }} alt="gambar"/>
                                            </Col>
                                            <Col sm={6}>
                                                <h3>{listProduct.title}</h3>
                                                <p className="text-danger">{listProduct.description}</p>
                                            </Col>

                                            <Col sm={3}>
                                                <p><span className="text-danger"> Rp.{listProduct.price} </span>
                                                {/* Delete List */}
                                                <i className="fas fa-trash-alt" style={{fontSize: '25px'}} onClick={()=>this.handleDelete(idx)} ></i>
                                                </p>
                                            </Col>
                                        </Row>
                                        {console.log(result += listProduct.price)}
                                    </div>
                                )
                            })}
                        </Col>
                        <Col sm={4}>
                            <div  className="bg-white shadow-lg">
                                <div className=" p-2 text-dark" style={{ backgroundColor: '#FAFAFA' }}>
                                    <h5>Bayar Sekaligus</h5>
                                </div>
                                <div className='p-4'>
                                    <p>
                                        Total Belanja : <span className="text-primary" > Rp.{result}</span>
                                    </p>
                                    <Button color="danger" size="sm" block style={{ borderRadius: '0px !important' }}
                                        onClick={this.handleBayar}
                                    >
                                        Bayar Sekaligus
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterClient />
                <ScrollButton
                    scrollStepInPx="50" delayInMs="16.66"
                />
            </div>
        )
    }
}