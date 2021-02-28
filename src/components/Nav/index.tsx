import {Link} from 'react-router-dom'

function Nav(): JSX.Element {
    return (
        <ul>
            <li>
                <Link to="/home">首頁</Link>
            </li>
            <li>
                <Link to="/about">關於</Link>
            </li>
            <li>
                <Link to="/about/blog">About/</Link>
            </li>
            <li>
                <Link to="/about/list">About/List</Link>
            </li>
        </ul>
    )
}

export default Nav
