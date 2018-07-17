// import logo200Image from 'assets/img/logo/logo_200.png';
import logo200Image from '../../assets/img/logo/logo_200.png'
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from '../SourceLink';
import React from 'react';
import {
  MdDashboard,
  MdKeyboardArrowDown,
  MdShoppingBasket,
  MdShoppingCart,
  MdAddShoppingCart,
  MdAccountBox,
} from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';


const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navItems = [
  { to: '/admin', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/admin/pelapak', name: 'pelapak', exact: false, Icon: MdAccountBox},
];

const product = [
  { to: '/admin/allproduct', name: 'all product', exact: false, Icon: MdShoppingCart },
  { to: '/admin/addproduct', name: 'add product', exact: false, Icon: MdAddShoppingCart },
];


const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isOpenProduct: true,
    isOpenPelapak: true
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    const rule = localStorage.getItem('rule')
    const usernameRule = localStorage.getItem('username')
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                {rule}{' '}{usernameRule}
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <div>
                {console.log(rule, ' <---- cek name')}
                {rule === 'admin' && (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      className="text-uppercase"
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}>
                      <Icon className={bem.e('nav-item-icon')} />
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                )}
                {rule !== 'admin' && name == 'dashboard' && (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      className="text-uppercase"
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}>
                      <Icon className={bem.e('nav-item-icon')} />
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                )}
              </div>
            ))}

            {/* product */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Product')}>
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdShoppingBasket className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Product</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenProduct
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenProduct}>
              {product.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}>
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            {/* end of product */}


          </Nav>
        </div>
      </aside>
    );
  }
}
// const mapStateToProps = (state) => {
//     console.log(state.postUserLogin.userLogin, ' <--- data reducer --- 1')
//     return {
//         dataUser: state.postUserLogin.userLogin
//     }
// }

// const mapDispatchToProps = () => {
//     return {

//     }
// }

export default Sidebar;
