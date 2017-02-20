import React, { Component } from 'react';

class SocialLinks extends Component {
    render() {
        return(
            <ul className="icons">
                <li>
                    <a href="#" className="icon fa-link" target="_blank">
                        <span className="label">
                            Website
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-facebook" target="_blank">
                        <span className="label">
                            Facebook
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-twitter" target="_blank">
                        <span className="label">
                            Twitter
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-instagram" target="_blank">
                        <span className="label">
                            Instagram
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-google-plus" target="_blank">
                        <span className="label">
                            Google+
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-linkedin" target="_blank">
                        <span className="label">
                            LinkedIn
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-youtube-play" target="_blank">
                        <span className="label">
                            YouTube
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-github" target="_blank">
                        <span className="label">
                            GitHub
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon fa-codepen" target="_blank">
                        <span className="label">
                            CodePen
                        </span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default SocialLinks;