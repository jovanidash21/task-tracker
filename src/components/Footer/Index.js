import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import Menu from './Menu';

class Footer extends Component {
    render() {
        const { user } = this.props;

        return(
            <section id="footer">
                <SocialLinks user={user} />
                <Menu />
            </section>
        )
    }
}

export default Footer;