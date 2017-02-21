import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return(
            <section id="banner">
                <header>
                    <h2>This my tasks</h2>
                </header>
                <footer>
                    <a href="#first" className="button style2 scrolly">View Tasks</a>
                </footer>
            </section>
        )
    }
}

export default Banner;