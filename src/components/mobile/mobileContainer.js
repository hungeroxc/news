import React, {Component} from 'react'
import Carousel1 from '../../images/carousel1.jpg'
import Carousel2 from '../../images/carousel2.jpg'
import Carousel3 from '../../images/carousel3.jpg'
import Carousel4 from '../../images/carousel4.jpg'
import {Tabs, Carousel} from 'antd'
import Loadable from 'react-loadable'


function MyLoadingComponent() {
    return <div></div>
}

const MobileNewsBlock = Loadable({
    loader: () => import('./mobileNewsBlock'),
    loading: MyLoadingComponent
})
const TabPane = Tabs.TabPane


class MobileContainer extends Component {
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        },
        list = [{
            key: '2',
            count: 20,
            type: 'shehui',
            tab: '社会'
        },{
            key: '3',
            count: 20,
            type: 'guonei',
            tab: '国内'
        },{
            key: '4',
            count: 20,
            type: 'guoji',
            tab: '国际'
        },{
            key: '5',
            count: 20,
            type: 'yule',
            tab: '娱乐'
        }]
        return (
            <div>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src={Carousel1} alt="p1"/></div>
                                <div><img src={Carousel2} alt="p2"/></div>
                                <div><img src={Carousel3} alt="p3"/></div>
                                <div><img src={Carousel4} alt="p4"/></div>
                            </Carousel>
                            <MobileNewsBlock count={20} type="top"/>
                        </div>
                    </TabPane>
                    {
                        list.map(e => {
                            return <TabPane tab={e.tab} key={e.key}>
                                <MobileNewsBlock count={e.count} type={e.type}/>
                            </TabPane>
                        })
                    }
                </Tabs>
            </div>
        )
    }
}   

export default MobileContainer