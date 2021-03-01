/** @format */

import Home from 'src/pages/home'
import About from '../pages/about'
import Blog from '../pages/blog'
import List from '../pages/list'

const routes = [
    {
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: '/about/blog',
                component: Blog,
            },
            {
                path: '/about/list',
                component: List,
            },
        ],
    },
]
export default routes
