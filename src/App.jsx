// packages
// component is:
// a function or class 
// returns UI or null
// may have props (input, object)
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Person from './Person';
// relative
// jsx : Javascript xml
// react dev tools
function App() {
    // const heading = React.createElement('h1', {}, 'Hello World!!');
    // const image = React.createElement('img', { src: 'https://images.pexels.com/photos/14306688/pexels-photo-14306688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 400, height: 400 });
    // const div = React.createElement('div', {}, [image, heading]);

    const age1 = 20;
    const age2 = 30;

    return <div className="xyz">
        {/* <Header></Header> */}
        <Header />
        <Person name="John" age={age1} />
        <Person name="Joseph" age={age2} />
        <h1>Hello world</h1>
        <img src="https://images.pexels.com/photos/14306688/pexels-photo-14306688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width="400" height="400" />
        <Footer />
    </div>;
}

export default App;

