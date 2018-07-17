import React, { Component } from 'react'
// style
import './style.css'
// layout
import HeaderClient from '../../../components/Layout/HeaderClient/HeaderClient'
import FooterClient from '../../../components/Layout/FooterClient/FooterClient'

// MainContent
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import FiturIcon from '../FiturIcon/FiturIcon'
import Recomended from '../recomended/Recomended'
import ScrollButton from '../../../components/Layout/ScroolButton/ScrollButton';

export default class HomeClient extends Component{
    render (){
        return (
            <div>
                <HeaderClient />
                <div className="styleBody">
                    <Banner />
                    {/* <Category />
                    <FiturIcon /> */}
                    <Recomended />
                </div>
                <FooterClient />
                <ScrollButton
                    scrollStepInPx="50" delayInMs="16.66"
                />
            </div>
        )
    }
}