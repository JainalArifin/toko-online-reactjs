import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios'

// style css
import './style.css'
// layout
import HeaderClient from '../../../components/Layout/HeaderClient/HeaderClient'
import FooterClient from '../../../components/Layout/FooterClient/FooterClient'
import ScrollButton from '../../../components/Layout/ScroolButton/ScrollButton'

const API_TOKO_ONLINE = `http://35.186.150.123:3220/product`

export default class DetailProduct extends Component {
  constructor(){
    super()
    this.state = {
      product: [],
      cart: []
    }
  }

  getById(){
    // console.log(this.props.children.props.match.params.id, '<---- id')
    let id = this.props.children.props.match.params.id
    axios.get(`${API_TOKO_ONLINE}/${id}`)
    .then((dataById)=>{
      this.setState({
        product: dataById.data
      })
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  componentDidMount(){
    this.getById()
    this.getCart()
  }

  getCart(){
    if(localStorage.getItem('cart') != null){
      let dataCart = JSON.parse(localStorage.getItem('cart'))
      console.log(dataCart, '<---- test datacart')
      this.setState({
        cart : dataCart
      })
    }
  }

  addProduct = async() =>{
    await this.getCart()
    this.setState({
      cart: [...this.state.cart, this.state.product]
    })
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
    window.location.reload()
  }

  handleBuy = (product) => {
    localStorage.setItem('buyProduct', JSON.stringify([product]))
    localStorage.setItem('dataTmp', JSON.stringify([product]))
    window.location.href = '/cart/carts/checkout/belisekarang'
  }

  render(props) {
    return (
      <div>
      <Container style={{
        marginTop: '180px'
      }}>
        <HeaderClient dataCart={this.state.cart} />
        <Row>
          <Col sm={8}  className="product shadow-lg">
            <Row>
              <Col sm={4}>
                <div>
                <img src={this.state.product.image} className="rounded img-style img-thumbnail"  alt="gambar"/>
                </div>
              </Col>
              <Col sm={8}>
                <h3>
                  {this.state.product.title}
                </h3>
                <hr />
                <h2 style={{color: '#CE0A24'}}>
                  Rp.{this.state.product.price}
                </h2>
                <div style={{fontSize: '12px', color: '#8b6f32', backgroundColor: '#FFF7E3', border: ' 1px solid #8b6f32', borderRadius: '5px', textAlign: 'center', paddingTop: '10px' }}>
                  <p>
                    Nikmati <span style={{color:'#76B854', fontWeight: 'bold'}}>Cicilan 0%</span> dengan belanja minimum Rp500.000 di lapak Grosir Hijab
                  </p>
                </div>
                  <p style={{fontSize: '12px', marginTop: '10px', fontWeight: 'bold'}}>
                    Tersedia <span style={{color:'#76B854'}}> > 1000 stok </span> barang
                  </p>
                  <p style={{fontSize: '12px', marginTop: '-20px'}}>
                  Masukkan jumlah yang diinginkan
                  </p>

                  {/* Beli sekrang */}
                   <Button color="success" size="lg" block onClick={()=>this.handleBuy(this.state.product)} >Beli Sekarang</Button>
                  {/*  / Beli sekarang */}

                  <Row className="mt-2">
                    <Col>
                    {/* tamnbahkan keranjang */}
                     <Button color="light" size="lg" block style={{border: '1px solid #eee'}} onClick={()=>{this.addProduct()}} >Tambhakan ke kranjang</Button>
                    </Col>
                    {/* / tambahakan kekerangjang */}
                    <Col>
                     {/* <Button color="light" size="lg" block style={{border: '1px solid #eee'}}>Chat Pelapak</Button> */}
                    </Col>
                  </Row>
              </Col>
            </Row>

          </Col>
          <Col sm={4}>
            <p>PELAPAK</p>
            <p>
              <img src="http://www.wwwallaboutcats.com/wp-content/uploads/2016/06/cat3-1.jpg" style={{ width: '20%', height: '68px' }} className="rounded-circle" alt="gambar"/>
              <b> zainal Arifin</b>
            </p>
            <hr />
            <p>
              <img src="https://image.flaticon.com/icons/svg/148/148883.svg" style={{ width: '5%' }} alt="gambar"/>
              <small> BL User </small>
            </p>
            <hr />
            <p>Pengiriman</p>
            <img src="https://3.bp.blogspot.com/-KU56hPZuvbw/WeobxKFDVxI/AAAAAAAAAJE/J-bSJ4TKN6kVsiL_9K0kSRCRzIdHVZQNQCLcBGAs/s1600/J%2526T%2B1.png" style={{ width: '40%', margin: '0px' }} alt="gambar"/>
            <img src="http://rumahpengaduan.com/wp-content/uploads/2015/03/cara-cek-resi-jne.png" style={{ width: '15%', marginTop: '20px' }} alt="gambar"/>
          </Col>
        </Row>
      </Container>
      <FooterClient />
      <ScrollButton
        scrollStepInPx="50" delayInMs="16.66"
      />
      </div>
    )
  }
};
