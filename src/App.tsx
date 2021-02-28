import React from 'react'
import './App.css'
import Router from '../src/router'
import Nav from './components/Nav'

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Nav />
            </Router>
        </div>
    )
}

export default App
