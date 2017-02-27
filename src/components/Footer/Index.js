import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import Menu from './Menu';

class Footer extends Component {
    render() {
        const {
            user,
            editingProfileState,
            handleEditProfileState
        } = this.props;

        return(
            <section id="footer">
                <SocialLinks
                    user={user}
                    editingProfileState={editingProfileState}
                    handleEditProfileState={handleEditProfileState}
                />
                <Menu />
            </section>
        )
    }
}

export default Footer;