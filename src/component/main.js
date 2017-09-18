import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from '@/router'

export default class App extends React.Component {
    render(){
        return (
             <Router>
                 <div>
                     {routes.map((route, i) => (
                         <RouteWithSubRoutes key={i} {...route}/>
                     ))}
           
                 </div>
             </Router>
        )
    }
}
