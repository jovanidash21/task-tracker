import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { user } = this.props;

        return(
            <section id="banner">
                <header>
                    <h1>
                        {user.firstName}&nbsp;
                        {user.lastName}
                    </h1>
                    <p>
                        &#64;{user.username}
                    </p>
                </header>
                <footer>
                    <a className="button style2">
                        Edit Profile
                    </a>
                </footer>
            </section>
        )
    }
}

export default Header;