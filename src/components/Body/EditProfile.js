import React, { Component } from 'react';

class EditProfile extends Component {
    render() {
        const { user, handleEditProfileState } = this.props;

        return(
            <article className="container box style3">
                <form>
                    <section>
                        <header>
                            <h2>About</h2>
                        </header>
                        <div className="row 50%">
                            <div className="12u$">
                                <label htmlFor="username">Username:</label>
                                <input id="username" type="text" className="text" placeholder="Username" defaultValue={user.username} />
                            </div>
                            <div className="6u 12u$(mobile)">
                                <label htmlFor="firstName">First Name:</label>
                                <input id="firstName" type="text" className="text" placeholder="First Name" defaultValue={user.firstName} />
                            </div>
                            <div className="6u$ 12u$(mobile)">
                                <label htmlFor="lastName">Last Name:</label>
                                <input id="lastName" type="text" className="text" placeholder="Last Name" defaultValue={user.lastName} />
                            </div>
                            <div className="12u$">
                                <label htmlFor="email">Email:</label>
                                <input id="email" type="text" className="text" placeholder="E-mail" defaultValue={user.email} />
                            </div>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h2>Social Media</h2>
                        </header>
                        {
                            user.socialLinks.map(socialLink =>
                                <div className="row 50%">
                                    <div className="12u$">
                                        <label htmlFor="website">Website:</label>
                                        <input id="website" type="text" className="text" placeholder="Website Link" defaultValue={socialLink.website} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="facebook">Facebook:</label>
                                        <input id="facebook" type="text" className="text" placeholder="Facebook Profile Link" defaultValue={socialLink.facebook} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="twitter">Twitter:</label>
                                        <input id="twitter" type="text" className="text" placeholder="Twitter Profile Link" defaultValue={socialLink.twitter} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="instagram">Instagram:</label>
                                        <input id="instagram" type="text" className="text" placeholder="Instagram Profile Link" defaultValue={socialLink.instagram} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="googleplus">Google Plus:</label>
                                        <input id="googleplus" type="text" className="text" placeholder="Google Plus Profile Link" defaultValue={socialLink.googleplus} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="linkedin">LinkedIn:</label>
                                        <input id="linkedin" type="text" className="text" placeholder="LinkedIn Profile Link" defaultValue={socialLink.linkedin} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="youtube">YouTube:</label>
                                        <input id="youtube" type="text" className="text" placeholder="YouTube Profile Link" defaultValue={socialLink.youtube} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="github">GitHub:</label>
                                        <input id="github" type="text" className="text" placeholder="GitHub Profile Link" defaultValue={socialLink.github} />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="codepen">CodePen:</label>
                                        <input id="codepen" type="text" className="text" placeholder="CodePen Profile Link" defaultValue={socialLink.codepen} />
                                    </div>
                                </div>
                            )
                        }
                        <div className="row 50%">
                            <div className="12u$">
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Update" />
                                    </li>
                                    <li>
                                        <a className="button style3" onClick={handleEditProfileState}>
                                            Cancel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </form>
            </article>
        )
    }
}

export default EditProfile;