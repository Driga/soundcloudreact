import React from 'react';
import {Route, Link} from 'react-router-dom'
import Tracks from '../tracks'
import Player  from '../player/Player';
import About from '../about'

const App = () => (
    <div>
        <header>
            <nav>
                <Link className="navbar-brand" to="/">SOUNDCLOUD</Link>
                <Link to="/">Tracks</Link>
                <Link to="/about-us">About</Link>
                <Player/>
            </nav>

        </header>

        <main>
            <Route exact path="/" component={Tracks}/>
            <Route exact path="/about-us" component={About}/>
        </main>

        <footer>
            <Link to="/">vdriga</Link>
        </footer>
    </div>
);

export default App
