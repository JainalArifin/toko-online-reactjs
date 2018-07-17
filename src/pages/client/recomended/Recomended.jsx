import React, { Component } from 'react';
import { Card,
   CardImg,
    CardBody,
   } from 'reactstrap';
import {Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

// style use css
import './style.css'

// test
// import Detail from '../detail/DetailProduct'

const API_TOKO_ONLINE = `http://35.186.150.123:3220/product`

export default class Recomended extends Component {
  constructor(){
    super();
    this.state = {
      dataProduct: []
    }
  }

  getData(){
    axios.get(API_TOKO_ONLINE)
    .then((result)=>{
      // console.log(result.data)
      this.setState({
        dataProduct: result.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  componentDidMount(){
    this.getData()
  }


  render() {
    return (
      <Container>
        <h5
            style={{color:'#F44E28'}}
        >Recomendasi</h5>
        <Row>
          {this.state.dataProduct.map((product, id)=>{
            return(
              <Col sm={2} key={id} className="mb-2 card-style-link">
              <Link to={`/product/barang/${product.title}/${product._id}`} className="link-product">
                <Card className="productlist-style">
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <CardBody>
                    <p>{product.title}</p>
                    <p className="price">Rp. {product.price}</p>
                    </CardBody>
                </Card>
              </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
};
