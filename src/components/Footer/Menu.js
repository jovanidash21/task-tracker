import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return(
            <div className="copyright">
                <ul className="menu">
                    <li>
                        &copy; 2017. All rights reserved.
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            GitHub Project
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;