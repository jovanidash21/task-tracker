import React, { Component } from 'react';

class Header extends Component {
    render() {
        const {
            user,
            editingProfileState,
            handleEditProfileState
        } = this.props;

        return(
            editingProfileState == false
                ?
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
                        <form action="/logout" method="post">
                            <a className="button style2" onClick={handleEditProfileState}>
                                Edit Profile
                            </a>
                            &nbsp;
                            <input className="style4" type="submit" value="Logout" />
                        </form>
                    </footer>
                </section>
                :
                <section id="banner">
                    <header>
                        <h1>Edit Profile</h1>
                    </header>
                </section>
        )
    }
}

export default Header;