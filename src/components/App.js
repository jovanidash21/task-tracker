import React, { Component } from 'react';
import Header from './Header/Index';
import Banner from './Banner/Index'
import Footer from './Footer/Index';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Banner />
                <Footer />
            </div>
        )
    }
}

export default App;