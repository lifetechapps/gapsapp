import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

// route components
import App from '../../ui/app/App.jsx'
import Home from '../../ui/app/Home.jsx'
import NotFound from '../../ui/app/NotFound.jsx'
import FoodList from '../../ui/food/FoodList.jsx'
import FoodDetails from '../../ui/food/FoodDetails.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home} />
            <Route path="foods" component={FoodList} />
            <Route path="food/:foodId" component={FoodDetails} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
)