import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// route components
import App from '../../ui/components/App.jsx'
import Home from '../../ui/components/Home.jsx'
import NotFound from '../../ui/components/NotFound.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)