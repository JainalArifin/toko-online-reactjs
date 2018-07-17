import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

// layout route
import { MainLayout } from './components/Layout'
// import PrivateRoute from './components/Layout/PrivateRoute'


// page client
import HomeClient from './pages/client/HomeClient/HomeCilent';
import DetailProduct from './pages/client/detail/DetailProduct';
import BuyProduct from './pages/client/buyProduct/BuyProduct';
import CheckOut from './pages/client/checkOut/CheckOut';

// login and signup
import Login from './pages/login/Login';
import Register from './pages/register/Register';

// page admin product
import AllProduct from './pages/admin/product/AllProduct';
import AddProduct from './pages/admin/product/AddProduct';
import Pelapak from './pages/admin/pelapak';

// for look component in admin reduction
import AuthModalPage from './pages/AuthModalPage';
// pages
import DashboardPage from './pages/DashboardPage';



const LayoutRoute = ({ component: Component, token, rule, layout: Layout, ...rest }) => (
    <Route {...rest} render={props =>
        token !== null ? (
          <div>
            {rule !== 'admin' ? (
              <Layout>
                <Component {...props} />
              </Layout>
            ):(
              <Layout>
                <Component {...props} />
              </Layout>
            )}
            {console.log(rule, ' <----- ini rule')}
          {/* <Layout>
            <Component {...props} />
          </Layout> */}
          </div>
      ):
      (
        <Redirect
          to={{
            pathname: "/admin/login",
            state: { from: props.location }
          }}
        />
    )}
    />
);

class Routes extends Component {
  render() {

    const token = localStorage.getItem('token')
    const rule = localStorage.getItem('rule')
    // console.log(token, ' <---- cek token 1')
    return (
      <Switch>

        {/* client */}
        <LayoutRoute exact path="/" layout={HomeClient} />
        <LayoutRoute exact path="/product/barang/:title/:id" layout={DetailProduct} />
        <LayoutRoute exact path="/cart/carts/checkout/belisekarang" layout={BuyProduct} />
        <LayoutRoute exact path="/cart/carts/checkout/" layout={CheckOut} />
        <LayoutRoute exact  path="/admin/login" layout={Login} />
        <LayoutRoute exact  path="/admin/signup" layout={Register} />
        <LayoutRoute exact path="/admin/login-modal" layout={MainLayout} component={AuthModalPage} />

        {/* admin */}
        <LayoutRoute exact={true} token={token} rule={rule} path="/admin" layout={MainLayout} component={DashboardPage} />
        <LayoutRoute exact={true} token={token} rule={rule} path="/admin/allproduct" layout={MainLayout} component={AllProduct} />
        <LayoutRoute exact token={token} rule={rule} path="/admin/addproduct" layout={MainLayout} component={AddProduct} />
        {rule === 'admin' ? (
          <LayoutRoute exact token={token} rule={rule} path="/admin/pelapak" layout={MainLayout} component={Pelapak} />
        ):(
          <Route  render={function(){
            return <h1>Not found</h1>
          }} />
        )}
      </Switch>
    )
  }
};


export default Routes
