import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Users from './pages/Users';
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import store from "./redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path={'/'} component={App}/>
            <Route path={'/users'} component={Users}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

