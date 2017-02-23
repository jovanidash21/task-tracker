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
                    <button className="button style2 scrolly-middle">
                        Edit Profile
                    </button>
                </footer>
            </section>
        )
    }
}

export default Header;