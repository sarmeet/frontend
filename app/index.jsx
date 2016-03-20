

import React from 'react';
import ReactDOM from 'react-dom';
import  injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { hashHistory } from 'react-router';



// error pages
import E_404 from './pages/error_pages/e_404';

// page imports
import Base from './pages/base';
import Login_page from './pages/loginpage/login_page_index';
import Homepage from './pages/homepage/home_page';


// plugins
injectTapEventPlugin();





// Routing
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={Homepage}> </IndexRoute>
            <Route path="login" component={Login_page}/>
            <Route path="*" component={E_404}/>
        </Route>
    </Router>
), document.getElementById('app'));
