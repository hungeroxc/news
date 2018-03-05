import React, {Component} from 'react'
import {Menu, Icon, Row, Col} from 'antd'
import PCLogo from '../../images/logo.png'


class PCHeader extends Component {
    handleClick = (e) => {
        console.log(e)
    }
    render(){
        let list = [{
                key: 'top',
                value: '头条'
            },{
                key: 'shehui',
                value: '社会'
            },{
                key: 'guonei',
                value: '国内'
            },{
                key: 'guoji',
                value: '国际'
            },{
                key: 'yule',
                value: '娱乐'
            },{
                key: 'tiyu',
                value: '体育'
            },{
                key: 'keji',
                value: '科技'
            },{
                key: 'shishang',
                value: '时尚'
        },]
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={PCLogo} alt="logo"/>
                            <span>OXC News</span>
                        </a>
                    </Col>
                    <Col span={18}>
                        <Menu 
                            mode="horizontal"
                            onClick={this.handleClick}>
                            {
                                list.map(e => {
                                    return <Menu.Item key={e.key}>
                                        <Icon type="appstore"/>
                                        {e.value}
                                    </Menu.Item>
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </header>
        )
    }
}


export default PCHeader