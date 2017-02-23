import React, { Component } from 'react';
import Header from './Header/Index';
import Body from './Body/Index';
import Footer from './Footer/Index';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default App;