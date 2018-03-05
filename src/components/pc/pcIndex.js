import React, {Component} from 'react'
import PCHeader from './pcHeader'
import PCContainer from './pcContainer'
import PCFooter from './pcFooter'

class PCIndex extends Component {
    render(){
        return (
            <div>
                <PCHeader/>
                <PCContainer/>
                <PCFooter/>
            </div>
        )
    }
}

export default PCIndex
