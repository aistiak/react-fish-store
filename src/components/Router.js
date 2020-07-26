import {BrowserRouter,Switch,Route} from 'react-router-dom'
import StroePicker from './StroePicker';
import React from 'react'
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StroePicker}> </Route>
            <Route path="/store/:storeid" component={App}> </Route>
            <Route component={NotFound}> </Route>
        </Switch>
    </BrowserRouter>
)


export default Router 