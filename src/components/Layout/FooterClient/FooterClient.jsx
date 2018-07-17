import React, { Component } from 'react';
import { Container } from 'reactstrap'


// style
import './style.css'

export default class FooterClient extends Component {
  render() {
    return (
      <div className="footer-style">
        <Container>
          <div style={{
            borderBottom: '1px solid #646464',
            paddingBottom: '20px'
          }}>
          <span>Follow us on : </span>
            <a>
              <i className="fab fa-facebook-square font-style"></i>
            </a>
            <a>
              <i className="fab fa-twitter-square font-style"></i>
            </a>
            <a>
              <i className="fab fa-youtube-square font-style"></i>
            </a>
            <a>
              <i className="fab fa-instagram font-style"></i>
            </a>
          </div>
          <h3
            style={{
              marginTop: '10px',
              color: 'white'
            }}
          >Keuntungan belanja Online</h3>
          <p
            style={{
              fontSize: '12px'
            }}
          >
            10 keuntungan belanja online lewat toko online - halo para shopeners, sesuai judul pada artikel pertama kali ini saya akan menjelaskan apa saja keuntungan / manfaat belanja online di toko online, perlu anda ketahui saat ini belanja online telah menjadi trend bagi sebagian besar masyarakat indonesia karena selain memberikan kemudahan belanja online juga menawarkan kenyamanan dalam berbelanja, belanja online adalah belanja pada umumnya hanya saja yang membedakan adalah cara belanja online serta sistem pembayarannya.
            memang, dengan semakin tingginya minat masyarakat indonesia untuk berbelanja online membuat banyak toko online gencar mempromosikan situs toko online mereka agar produk dagangan mereka semakin laris, namun sayangnya banyak masyarakat / pembeli merasa ragu untuk berbelanja online untuk itu bagi anda yang belum pernah merasakan pengalaman belanja online dan bertanya-tanya penasaran apa saja keuntungan belanja online di toko online itu, berikut kami paparkan dibawah ini:
          </p>
          <ol
            style={{
              fontSize: '12px',
              width : '50%'
            }}
          >
            <li>
             hemat waktu : belanja online tidak membutuhkan waktu lama, cukup membuka situs toko online, memilih produk, bayar kemudian tunggu sampai barang tiba.
            </li>
            <li>
              hemat tenaga : belanja online tidak mengharuskan anda modar-mandir / bolak-balik memilih produk yang diinginkan.
            </li>
            <li>
            belanja sambil duduk santai : tidak seperti belanja offline, belanja online lewat toko online dapat dilakukan kapan saja dan dimana saja tanpa harus mendatangi toko tersebut.
            </li>
            <li>
            memiliki banyak pilihan produk : toko online selalu menghadirkan beragam produk untuk menarik minat konsumen membeli produk lain.
            </li>
            <li>
            harga produk jauh lebih murah : berdasarkan pengalaman, produk yang dijual di toko online harganya jauh lebih murah ketimbang belanja offline.
            </li>
            <li>
            lebih banyak diskon dibandingkan belanja offline : dengan belanja online anda berkesempatan untuk mendapatkan banyak diskon dan beragam pilihan produk murah berkualitas.
            </li>
            <li>
            terdapat banyak sistem pembayaran : belanja online lewat toko online memberikan anda kemudahan dalam pembayaran, bisa transfer rekening hingga cod (cash on delivery)
            </li>
            <li>
            bisa kredit : beberapa toko online menyediakan opsi kredit khusus untuk pembeli yang tidak memiliki budget cukup untuk beli secara cash.
            </li>
            <li>
            ada garansi : produk yang dibeli secara online di toko online juga memiliki garansi apabila memang produk yang bersangkutan mengalami masalah.
            </li>
            <li>
            tanpa biaya ongkos kirim : anda tidak perlu kuatir dengan produk, semua akan dikirim sesuai alamat anda dan pastinya tanpa ongkir (ongkos kirim).
            </li>
          </ol>
        </Container>
      </div>
    )
  }
};
