import React, {Component} from 'react'
import axios from 'axios'
import {Card, Spin} from 'antd'
import {Link, BrowserRouter} from 'react-router-dom'


class PCNewsImageBlock extends Component {
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
        let imageStyle = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        },
        h3Style = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
        },
        spanStyle = {
            textAlign: 'center',
            minHeight: '350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        news = this.state.news,
		newsList = news.length
            ? 
            news.map((news, index) => (
				<div key={index} className="imageblock">
					<Link to={`/details/${news.uniquekey}`} target="_blank">
						<div className="custom-image">
							<img alt="" style={imageStyle} src={news.thumbnail_pic_s}/>
						</div>
						<div className="custom-card">
							<h3 style={h3Style}>{news.title}</h3>
							<p>{news.author_name}</p>
						</div>
					</Link>
				</div>
			))
            : 
            <div style={spanStyle}>
                <Spin size="large"/>
            </div>
        return (
            <BrowserRouter>
                <div className="topNewsList">
                    <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                        {newsList}
                    </Card>
                </div>
            </BrowserRouter>  
        )
    }
}

export default PCNewsImageBlock


