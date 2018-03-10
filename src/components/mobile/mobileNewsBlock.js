import React, {Component} from 'react'
import {Row, Col, Spin} from 'antd'
import {Link} from 'react-router-dom'
import axios from 'axios'

class MobileNewsBlock extends Component {
    constructor(){
        super()
        this.state = {
            news: []
        }
    }
    componentWillMount(){
        let p = this.props,
            url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${p.type}&count=${p.count}`
        axios.get(url)
        .then(res => {
            this.setState({
                news: res.data
            })
        })
    }
    render(){
        let news = this.state.news,
            spanStyle = {
                textAlign: 'center',
                display: 'flex',
                height: '400px',
                justifyContent: 'center',
                alignItems: 'center'
            },
            list = news.length > 1
            ?
            news.map((news, index) => {
                return <section key={index} className="m_article list-item special_section clearfix">
                    <Link to={`/details/${news.uniquekey}`}>
                        <div className="m_article_img">
                            <img src={news.thumbnail_pic_s} alt={news.title}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{news.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{news.realtype}</span>
                                    <span className="m_article_time">{news.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section> 
            })
            :
            <div style={spanStyle}>
                <Spin size="large"/>
            </div>
        return(
            <div>
                <Row>
                    <Col span={24}>
                        {list}
                    </Col>
                </Row>
            </div>
        )
    }
}


export default MobileNewsBlock