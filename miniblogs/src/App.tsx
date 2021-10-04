import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Home from './component/home';
import Contact from './component/contact';
import About from './component/about';

function App() {
    let location = useLocation()
    let history = useHistory()

    const endpoint = useMemo(() => location.pathname || '', [location])

    const ContentTab = useMemo(() => {
        switch (endpoint) {
            case '/home':
                return <Home></Home>;
            case '/contact':
                return <Contact></Contact>;
            case '/about':
                return <About></About>;
            default:
                break;
        }
    }, [endpoint])

    useEffect(() => {
        if (endpoint === '/') {
            history.push('/home')
        }
    }, [endpoint, history])

    let HandelChangtab = useCallback(
        (endpoint: any) => {
            history.push(`/${endpoint}`)
        },
        [history],
    )
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/home" style={{color:"black"}}>
                        <span className="navbar-brand">Denali</span>
                    </Link>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link"
                                onClick={() => HandelChangtab('home')}
                            ><Link to ="/home" style={{color:"black"}}>Home</Link></li>

                            <li className="nav-item nav-link"
                                onClick={() => HandelChangtab('about')}
                            ><Link to="/about" style={{color:"black"}}>About</Link></li>

                            <li className="nav-item nav-link"
                                onClick={() => HandelChangtab('contact')}
                            ><Link to="/contact" style={{color:"black"}}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {ContentTab}
        </div>
    );
}

export default App;
