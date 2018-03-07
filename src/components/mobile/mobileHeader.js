import React, {Component} from 'react'
import MobileLogo from '../../images/logo.png'





class MobildHeader extends Component {
    render(){
        return(
            <div id="mobileheader">
                <header>
                    <a href="/">
                        <img src={MobileLogo} alt="logo"/>
                        <span>OXC News</span>
                    </a>
                </header>
            </div> 
        )
    }
}

export default MobildHeader