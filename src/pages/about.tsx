/** @format */

import {BrowserRouter as Router, Route} from 'react-router-dom'

function About(props) {
    return (
         <div className="About">
      About 
            {props.routes.map((item, index) => {
                return   <Route key={index} exact path={item.path} component={item.component}></Route>
            })}
        </div>
    )
}

export default About
