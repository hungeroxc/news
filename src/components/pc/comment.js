import React,{Component} from 'react'
// import axios from 'axios'

const axios = import('axios')
console.log(axios)

class Comment extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount(){

    }
}