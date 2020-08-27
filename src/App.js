import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from './components/ExpenseDashboardPage.js'
import AddExpensePage from  './components/AddExpensePage.js'
import EditExpensePage from  './components/EditExpensePage.js'
import HelpExpensePage from  './components/HelpExpensePage.js'
import NotFound from  './components/NotFound.js'
import Header from  './components/Header.js'







const routes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route  path='/' component={ExpenseDashboardPage} exact />
                <Route  path='/client' component={AddExpensePage} />
                <Route  path='/edit' component={EditExpensePage} />
                <Route  path='/help' component={HelpExpensePage} />
                <Route  component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default routes;    
