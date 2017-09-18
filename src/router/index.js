import React from 'react'
import { Route } from 'react-router-dom'
import Hello from '@/component/Hello'

const routes = [
    {
        path: '/',
        component: Hello
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

export { RouteWithSubRoutes, routes }
