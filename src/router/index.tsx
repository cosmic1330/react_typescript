import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes'
function RouterComponent(props) {
    return (
        <Router>
            {props.children}

            <div>
                <Switch>
                    {routes.map((router, index) => {
                        if (router.exact) {
                            return (
                                <Route
                                    exact
                                    key={index}
                                    path={router.path}
                                    render={props => <router.component {...props} routes={router.routes} />}
                                />
                            )
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={router.path}
                                    render={props => <router.component {...props} routes={router.routes} />}
                                />
                            )
                        }
                    })}
                </Switch>
            </div>
        </Router>
    )
}

export default RouterComponent
