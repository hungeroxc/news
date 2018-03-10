import React, {Component} from 'react'
import {Row, Col, Card} from 'antd'
import axios from 'axios'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount(){
        let p = this.props,
            url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${p.uniquekey}`
        
        axios.get(url)
        .then(res => {
            let comment = []
            if(res.data.length > 20){
                comment = res.data.splice(0, 20)
            }else{
                comment = res.data
            }
            this.setState({
                comments: comment
            })
        })
    }
    render(){
        let comments = this.state.comments,
            commentList = comments.length > 0
            ?
            comments.map((comment, index) => {
                return <Card key={index} extra={
                    <div style={{wordBreak: 'break-word'}}>
                        <div style={{textAlign: 'left'}}>{comment.UserName}</div>
                        <p>发布于{comment.datetime}</p> 
                        <p style={{textAlign: 'left'}}>{comment.Comments + '11111111111111111111111111111111111111111111111111'}</p>
                    </div>
                }></Card>  
            })
            :
            "没有加载到评论"

        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Comments