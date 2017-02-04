import React from 'react'
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router'

// route components
import App from '../../ui/components/App.jsx'
import Home from '../../ui/components/Home.jsx'
import NotFound from '../../ui/components/NotFound.jsx'
import FoodList from '../../ui/components/FoodList.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="home" component={Home}/>
            <Route path="foods" component={FoodList}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)