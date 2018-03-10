import React from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import 'antd/dist/antd.css'


import './css/pc.css'
import './css/mobile.css'
function MyLoadingComponent() {
    return <div></div>
}

const PCIndex = Loadable({
    loader: () => import('./components/pc/pcIndex'),
    loading: MyLoadingComponent
})
const PCNewsDetails = Loadable({
    loader: () => import('./components/pc/pcNewsDetail'),
    loading: MyLoadingComponent
})

const MobileIndex = Loadable({
    loader: () => import('./components/mobile/mobileIndex'),
    loading: MyLoadingComponent
})

const MobileDetail = Loadable({
    loader: () => import('./components/mobile/mobileDetail'),
    loading: MyLoadingComponent
})

ReactDOM.render(
    <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PCIndex}></Route>
                    <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                </Switch>
            </BrowserRouter>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MobileIndex}></Route>
                    <Route path="/details/:uniquekey" component={MobileDetail}></Route>
                </Switch>
            </BrowserRouter>
        </MediaQuery>
    </div>, 
    document.getElementById('root')
)
