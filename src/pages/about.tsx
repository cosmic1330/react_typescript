import {Route} from 'react-router-dom'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

type AboutProps = {
    routes:any
}

function About(props:AboutProps): JSX.Element {
    return (
         <div className="About" >
            <Button>About</Button> 
            {props.routes.map((item, index) => {
                return   <Route key={index} exact path={item.path} component={item.component}></Route>
            })}
        </div>
    )
}

export default About
