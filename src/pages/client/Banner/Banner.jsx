import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

const items = [
{
    src: 'https://cf.shopee.co.id/file/818cef9d757f0d1f1f1a1bfc716b66e5',
    altText: 'Slide 1',
    caption: 'Slide 1'
},
{
    src: 'https://cf.shopee.co.id/file/2d9b2e0466e939a538f82f95765fe0cd',
    altText: 'Slide 2',
    caption: 'Slide 2'
},
{
    src: 'https://cf.shopee.co.id/file/64a456efa8b98f6839eeef4b04377698',
    altText: 'Slide 3',
    caption: 'Slide 3'
}
];

class HomeBanner extends Component{
    //slider
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    // slider to end

    render (){
        //slider
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
        return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}

            >
              <img src={item.src} alt={item.altText}  className="rounded img-fluid"/>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
        // slider end

        return (
            <Container>
                <Row>
                    <Col sm={8} className="mb-2">
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col sm={12}>
                                <img src="https://cf.shopee.co.id/file/d87a5fcce5926190702e4dc15885b6a6" className="rounded img-fluid" alt="gambar"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="mt-2">
                                <img src="https://cf.shopee.co.id/file/9251fd92ad9dfb01e09a363ff52e377d"  className="rounded img-fluid" alt="gambar"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomeBanner