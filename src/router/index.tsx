import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes'

type RouterProps = {
    children:React.ReactNode
}
function RouterComponent(props:RouterProps) : JSX.Element{
    return (
        <Router basename={process.env.REACT_APP_BASENAME}>
            {props.children}

            <div>
                <Switch>
                    {routes.map((router, index) => {
                        if (router.exact) {
                            return (
                                <Route
                                    exact
                                    key={index}
                                    component={router.component}
                                    path={router.path}
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
