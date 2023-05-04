import Footer from './Footer';
import Header from './Header';
import AppRoutes from './AppRoutes';
import AppContext from './context/AppContext';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const [isLoggedin, setLogin] = useState(false);

    useEffect(() => {
        setLogin(localStorage.getItem('token') ? true : false);
    }, [isLoggedin])

    return <div>
        <AppContext.Provider value={{ isLoggedin, setLogin }}>
            <Header />
            <AppRoutes />
            <Footer />
        </AppContext.Provider>
    </div>;
}

export default App;

