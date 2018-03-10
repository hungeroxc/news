import React,{Component} from 'react'
import {Row, Col, BackTop, Spin} from 'antd'
import axios from 'axios'
import Loadable from 'react-loadable'

function MyLoadingComponent() {
    return <div></div>
}

const MobileHeader = Loadable({
    loader: () => import('./mobileHeader'),
    loading: MyLoadingComponent
})

const MobileFooter = Loadable({
    loader: () => import('./mobileFooter'),
    loading: MyLoadingComponent
})

const Comments = Loadable({
    loader: () => import('../comments'),
    loading: MyLoadingComponent
})

class MobileDetail extends Component {
    constructor(){
        super()
        this.state = {
            news: {}
        }
    }
    componentWillMount(){
        let p = this.props,
            url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${p.match.params.uniquekey}`
        
        axios.get(url).then(res => {
            this.setState({
                news: res.data
            })
        })
    }
    createMarkup(){
        return {
            __html: this.state.news.pagecontent
        }
    }
    render(){
        let spanStyle = {
            textAlign: 'center',
            display: 'flex',
            height: '400px',
            justifyContent: 'center',
            alignItems: 'center'
        }, 
        detail = Object.keys(this.state.news).length > 0
        ?
        <Col style={{marginLeft: 0, marginRight: 0}} span={24} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            <br/>
            <hr/>
            <Comments uniquekey={this.props.match.params.uniquekey}/>
        </Col>
        :
        <div style={spanStyle}>
            <Spin size="large"/> 
        </div>

        return (
            <div id="mobileDetailsContainer">
                <MobileHeader />
                <div className="ucmobileList">
                    <Row>
                        {detail}
                    </Row>
                    <MobileFooter />
                    <BackTop visibilityHeight={400} />
                </div>
            </div> 
        )
    }

}


export default MobileDetail