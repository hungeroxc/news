import React, {Component} from 'react'
import axios from 'axios'
import {Row, Col, BackTop} from 'antd'
import Loadable from 'react-loadable'


function MyLoadingComponent() {
    return <div></div>
}

const PCHeader = Loadable({
    loader: () => import('./pcHeader'),
    loading: MyLoadingComponent
})

const PCFooter = Loadable({
    loader: () => import('./pcFooter'),
    loading: MyLoadingComponent
})

const PCNewsImageBlock = Loadable({
    loader: () => import('./pcNewsImageBlock'),
    loading: MyLoadingComponent
})

const Comments = Loadable({
    loader: () => import('../comments'),
    loading: MyLoadingComponent
})

class PCNewsDetails extends Component {
    constructor(){
        super()
        this.state = {
            newsItem: ''
        }
    }
    componentWillMount(){
        let p = this.props,
            url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${p.match.params.uniquekey}`
        axios.get(url)
        .then(res => {
            this.setState({
                newsItem: res.data
            })
            if(!this.state.newsItem.title){
                document.title = "OXC News | OXC 新闻平台"
            }else{
                document.title = this.state.newsItem.title + ' - OXC News | OXC 新闻平台'
            }
        })
    }
    createMarkup(){
        return {
            __html: this.state.newsItem.pagecontent
        }
    }
    render(){
        let html = this.createMarkup()
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col className="container" span={14}>
                        <div 
                            className="articleContainer" 
                            dangerouslySetInnerHTML={html}>
                        </div>
                        <br/>
                        <hr/>
                        <Comments uniquekey={this.props.match.params.uniquekey}/>
                    </Col>
                    <Col span={16}>
                        <div style={{marginLeft: "200px"}}>
                            <PCNewsImageBlock
                                count={40}
                                type="top"
                                width="100%"
                                cardTitle="相关新闻"
                                imageWidth="160px"
                            />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>
        )
    }
}

export default PCNewsDetails