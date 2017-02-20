import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import Menu from './Menu';

class Footer extends Component {
    render() {
        return(
            <section id="footer">
                <SocialLinks />
                <Menu />
            </section>
        )
    }
}

export default Footer;