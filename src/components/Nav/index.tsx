import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <ul>
            <li>
                <Link to="/home">首頁</Link>
            </li>
            <li>
                <Link to="/about">關於</Link>
            </li>
            <li>
                <Link to="/about/blog">speak/</Link>
            </li>
            <li>
                <Link to="/about/list">speak/english</Link>
            </li>
        </ul>
    )
}

export default Nav
