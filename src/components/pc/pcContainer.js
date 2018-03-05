import React, {Component} from 'react'
import {Row, Col, Carousel, Tabs} from 'antd'
import Carousel1 from '../../images/carousel1.jpg'
import Carousel2 from '../../images/carousel2.jpg'
import Carousel3 from '../../images/carousel3.jpg'
import Carousel4 from '../../images/carousel4.jpg'

import PCNewsImageBlock from './pcNewsImageBlock'
import PCNewsBlock from './pcNewsBlock'


const TabPane = Tabs.TabPane

class PCContainer extends Component {
    render(){
        let setting = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
            autoplay: true,
            effect: 'fade'
        }
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <div className="leftContainer">
                        <div className="carousel">
                            <Carousel {...setting}>
                                <div><img src={Carousel1} alt="picture1" /></div>
                                <div><img src={Carousel2} alt="picture2" /></div>
                                <div><img src={Carousel3} alt="picture3" /></div>
                                <div><img src={Carousel4} alt="picture4" /></div>
                            </Carousel>
                            <PCNewsImageBlock 
                                type="guoji" 
                                count={6} 
                                width="400px"
                                cartTitle="国际头条" 
                                imageWidth="112px"
                            />
                        </div>
                    </div>
                    <Tabs className="tabs_news">
                        <TabPane tab="头条新闻" key="1">
                            <PCNewsBlock 
                                count={22}
                                type="top"
                                width="100%"
                                bordered="false"
                            />
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <PCNewsBlock 
                                count={22} 
                                type="guoji" 
                                width="100%" 
                                bordered="false"
                            />
						</TabPane>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

export default PCContainer