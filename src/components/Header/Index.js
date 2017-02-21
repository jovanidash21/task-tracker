import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <section id="header">
                <header>
                    <h1>Jovani Warguez</h1>
                    <p>Todo List</p>
                </header>
                <footer>
                    <a href="#banner" className="button style2 scrolly-middle">Proceed</a>
                </footer>
            </section>
        )
    }
}

export default Header;