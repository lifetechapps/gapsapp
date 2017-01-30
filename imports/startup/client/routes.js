import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// route components
import App from '../../ui/App.jsx';
import Search from '../../ui/components/Search.jsx'
import Browse from '../../ui/components/Browse.jsx'
import Test from '../../ui/components/Test.jsx'
import Profiles from '../../ui/components/Profiles.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="Search" component={Search}/>
            <Route path="Browse" component={Browse}/>
            <Route path="Test" component={Test}/>
            <Route path="Profiles" component={Profiles}/>
        </Route>
    </Router>
);