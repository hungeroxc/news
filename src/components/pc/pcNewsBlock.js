import React, {Component} from 'react'
import {Card, Spin} from 'antd'
import {Link, BrowserRouter} from 'react-router-dom'

import axios from 'axios'


class PCNewsBlock extends Component{
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
                minHeight: '610px',
                width: '400px',
                height: '410px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            list = news.length > 1 
                ?
                news.map((news, index) => {
                    return <li key={index}>
                        <BrowserRouter>
                            <Link to={`/details/${news.uniquekey}`} target="_blank">
                                {news.title}
                            </Link>
                        </BrowserRouter>
                    </li>   
                    
                })
                :
                <div style={spanStyle}>
                    <Spin size="large"/>
                </div>
                
        return (
            <div>
                <Card>
                    <ul>
                        {list}
                    </ul>
                </Card>
            </div>
        )
        
    }
}

export default PCNewsBlock