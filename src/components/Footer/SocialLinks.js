import React, { Component } from 'react';

class SocialLinks extends Component {
    render() {
        const {
            user,
            editingProfileState,
            handleEditProfileState
        } = this.props;

        return(
            <ul className="icons">
                {
                    user.socialLinks.length == 0
                        ?
                        <li>
                            Add your social media links here.&nbsp;
                            {
                                editingProfileState == false
                                    ?
                                    <a onClick={handleEditProfileState}>
                                        Add
                                    </a>
                                    :
                                    ""
                            }
                        </li>
                        :
                        <div>
                            {
                                user.socialLinks.map(socialLink =>
                                    <div>
                                        {
                                            socialLink.website != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.website} className="icon fa-link" target="_blank">
                                                        <span className="label">
                                                            Website
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.facebook != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.facebook} className="icon fa-facebook" target="_blank">
                                                        <span className="label">
                                                        Facebook
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.twitter != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.twitter} className="icon fa-twitter" target="_blank">
                                                        <span className="label">
                                                        Twitter
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.instagram != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.instagram} className="icon fa-instagram" target="_blank">
                                                        <span className="label">
                                                        Instagram
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.googleplus != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.googleplus} className="icon fa-google-plus" target="_blank">
                                                        <span className="label">
                                                        Google+
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.linkedin != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.linkedin} className="icon fa-linkedin" target="_blank">
                                                        <span className="label">
                                                        LinkedIn
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.youtube != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.youtube} className="icon fa-youtube-play" target="_blank">
                                                        <span className="label">
                                                        YouTube
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.github != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.github} className="icon fa-github" target="_blank">
                                                        <span className="label">
                                                        GitHub
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                        {
                                            socialLink.codepen != ""
                                                ?
                                                <li>
                                                    <a href={socialLink.codepen} className="icon fa-codepen" target="_blank">
                                                        <span className="label">
                                                        CodePen
                                                        </span>
                                                    </a>
                                                </li>
                                                : ""
                                        }
                                    </div>
                                )
                            }
                        </div>
                }
            </ul>
        )
    }
}

export default SocialLinks;