import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import UserList from './pages/UserList';
import Account from './pages/account';
import Form from './pages/Forms';



function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/frells" component={UserList} />
        <Route path="/create-account" component={Form} />
        <Route path="/account" component={Account} />
        </BrowserRouter>
    )
}

export default Routes;