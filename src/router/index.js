/**
 * created by 41587 on 2019/11/21
 */
import React,{ Component } from 'react'
import Route from './route'

import { Switch, Redirect, HashRouter as Router } from 'react-router-dom'

import RouteMap,{ App } from './routeMap';

export  default class RouterIndex extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        {
                            RouteMap.map((item,index)=>{
                                return (
                                    <Route key={index} path={item.path} title = { item.title } exact render={props=>
                                        (
                                            item.redirect ? <Redirect to={ item.redirect }   /> :<item.component {...props} />
                                        )
                                    }>
                                    </Route>
                                )
                            })
                        }
                        <Redirect to= '/not-found' />
                    </Switch>
                </App>
            </Router>
        )
    }
}
