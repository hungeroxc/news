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
            this.setState({
                comments: res.data
            })
        })
    }
    render(){
        let comments = this.state.comments,
            commentList = comments.length > 0
            ?
            comments.map((comment, index) => {
                return <Card key={index} title={comment.UserName} extra={
                    <div>
                        <p>发布于{comment.datetime}</p> 
                        <p>{comment.Comments}</p>
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