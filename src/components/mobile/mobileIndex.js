import React, {Component} from 'react'
import MobileHeader from './mobileHeader'
import MobileContainer from './mobileContainer'
import MobileFooter from './mobileFooter'


class MobileIndex extends Component {
    render(){
        return (
            <div>
                <MobileHeader/>
                <MobileContainer/>
                <MobileFooter/>
            </div>
        )
    }
}

export default MobileIndex