import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import 'antd/dist/antd.css'


import PCIndex from './components/pc/pcIndex'
import PCNewsDetails from './components/pc/pcNewsDetail'
import './css/pc.css'



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
