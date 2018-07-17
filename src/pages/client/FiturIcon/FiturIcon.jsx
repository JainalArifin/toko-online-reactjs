import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

import './style.css'

export default class FiturIcon extends Component {
  render() {
    return (
      <Container style={{
            borderRadius: '5px'
      }} className="mt-3 mb-3 pt-2 pb-2 bg-white shadow-lg">
        <Row>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a" > */}
                    <img src="https://image.flaticon.com/icons/svg/204/204283.svg" className="img-fluid img-fitur"  alt="gambar"/>
                    <p>Toko Mart</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/"  className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/176/176072.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Garansi Harga Termurah</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/"  className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/229/229628.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Inspirasi Shopee</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/331/331880.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Gratis ongkir</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/"  className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/550/550638.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Reward Koin Shopee</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/"  className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/236/236822.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Group Hemat</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/190/190603.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Kreasi Nusantara</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/300/300256.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Voucher Toko</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/265/265700.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Promo Bank</p>
                {/* </a> */}
            </Col>
            <Col className="text-center">
                {/* <a href="/" className="text-center text-dark icon-a"> */}
                    <img src="https://image.flaticon.com/icons/svg/265/265741.svg" className="img-fluid img-fitur" alt="gambar"/>
                    <p>Semua Promo</p>
                {/* </a> */}
            </Col>
        </Row>
      </Container>
    )
  }
};
