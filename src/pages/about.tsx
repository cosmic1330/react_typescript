import {Route} from 'react-router-dom'

type AboutProps = {
    routes:any
}

function About(props:AboutProps): JSX.Element {
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
