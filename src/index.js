import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import 'antd/dist/antd.css'


import './css/pc.css'



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

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PCIndex}></Route>
                <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            </Switch>
        </BrowserRouter>
    </div>, 
    document.getElementById('root')
)
