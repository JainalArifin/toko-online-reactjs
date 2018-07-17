import React, { Component } from 'react';

// file css
import './style.css'

export default class ScrollButton extends Component {
    constructor (){
        super()
        this.state = {
          intervalid: 0
        }
    }

    scrollStep(){
        if(window.pageYOffset === 0){
        clearInterval(this.state.intervalid)
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInx)
    }

    scrollToTop(){
        let dataIntervalid = setInterval(this.scrollStep.bind(this), this.props.delayInMs)
        this.setState({ intervalid: dataIntervalid });
    }

    render() {
        return (
            <div>
                <span title='Back to top' className='scroll text-center'
                onClick={ () => {this.scrollToTop()}}>
                <i className="fas fa-arrow-circle-up"></i>
                </span>
            </div>
        )
  }
};
