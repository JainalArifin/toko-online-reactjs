import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, Button  } from 'reactstrap'
import Swal from 'sweetalert2'

// layout
import HeaderClient from '../../../components/Layout/HeaderClient/HeaderClient'
import FooterClient from '../../../components/Layout/FooterClient/FooterClient'
import ScrollButton from '../../../components/Layout/ScroolButton/ScrollButton'

export default class BuyProduct extends Component {
    constructor(){
        super()
        this.state = {
            dataProduct: [],
            dataTmp: []
        }
    }


    getData(){
        if(localStorage.getItem('buyProduct') !=null){
            let data = JSON.parse(localStorage.getItem('buyProduct'))
            this.setState({
                dataProduct: data
            })
        }

        if(localStorage.getItem('dataTmp') != null){
            let data = JSON.parse(localStorage.getItem('dataTmp'))
            this.setState({
                dataTmp: data
            })
        }

    }


    componentDidMount(){
        this.getData()
    }

    addHandle = async () =>{
        await this.setState({
            dataProduct: [...this.state.dataTmp, this.state.dataProduct[0]]
        })
        localStorage.setItem('dataTmp', JSON.stringify(this.state.dataProduct))
        this.getData()
    }

    handelDelete = () => {
        if(this.state.dataTmp.length !== 1 ){
            this.state.dataTmp.pop()
            localStorage.setItem('dataTmp', JSON.stringify(this.state.dataTmp))
            this.getData()
        }else if(this.state.dataTmp.length === 1){
            Swal('Maaf...', 'Maksimal jumlah yang di masukan adalah 1 !', 'error')
        }

        // console.log(this.state.dataTmp, ' ---- dataTmp delete')
    }

    handleBayar = () => {
        localStorage.removeItem('dataTmp');
        Swal({
            title: 'Terimakasih pesanan anda sedang kami proses',
            animation: false,
            customClass: 'animated tada'
        }).then(()=>{
            window.location.href = '/'
        })
    }

    render() {
        var resultPrice = 0
        return (
            <div>
            <HeaderClient />
            <div style={{
                marginTop: '122px'
            }} >
                <Container>
                    <Row>
                    <Col sm={8} >
                        <div className="bg-white shadow-lg p-2">
                            {/* {console.log(this.state.dataProduct !== '', ' <--- array data')}
                            {console.log(this.state.dataProduct, ' <------  1')}
                            {console.log(this.state.dataProduct[0], ' <------  2')} */}
                            {

                                this.state.dataProduct[0] !== undefined && (
                                    // console.log(this.state.dataProduct[0].title, ' <--- cek data')
                                    <div>
                                        <Row>
                                            <Col sm={4}>
                                                <img src={this.state.dataProduct[0].image} className="img-thumbnail"   alt="gambar"/>
                                            </Col>
                                            <Col sm={8}>
                                                <p>
                                                    {this.state.dataProduct[0].title}
                                                </p>
                                                <p>
                                                    {this.state.dataProduct[0].description}
                                                </p>
                                                <InputGroup style={{ width: '30%' }}>
                                                    <InputGroupAddon addonType="prepend" onClick={this.handelDelete}>
                                                        -
                                                    </InputGroupAddon>
                                                    <Input placeholder={this.state.dataTmp.length} type="number"  className="text-center" />
                                                    <InputGroupAddon addonType="append" onClick={this.addHandle}>
                                                        +
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                    <Col sm={4} >
                        <div className=" bg-white shadow-lg p-2 mt-2">
                            <h3>Bayar Langsung</h3>
                            {this.state.dataTmp.map((list)=>{
                                return(
                                    <div>
                                        {/* <p>Nama Barang : <span>{list.title}</span></p> */}
                                        { console.log(resultPrice +=  list.price)}
                                    </div>
                                )
                            })}
                            <p>
                                Jumlah barang : <b  className="text-danger"> {this.state.dataTmp.length}</b>
                            </p>
                            <p>
                                Total Belanja
                                <span className="text-danger"> Rp.{ resultPrice }</span>
                            </p>
                            <Button className="btn btn-danger btn-sm btn-block" onClick={this.handleBayar}>Bayar Sekarang</Button>
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
};
