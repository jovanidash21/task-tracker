import React, { Component } from 'react';

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.handleEditProfileSubmit = this.handleEditProfileSubmit.bind(this);
    }
    handleEditProfileSubmit(event) {
        event.preventDefault();

        const {
            user,
            handleEditProfileSubmit
        } = this.props;
        let userID = user._id;
        let updateProfile = user;
        let socialLinks = [];

        socialLinks.push({
            website: this.refs.website.value,
            facebook: this.refs.facebook.value,
            twitter: this.refs.twitter.value,
            instagram: this.refs.instagram.value,
            googleplus: this.refs.googleplus.value,
            linkedin: this.refs.linkedin.value,
            youtube: this.refs.youtube.value,
            github: this.refs.github.value,
            codepen: this.refs.codepen.value
        });

        updateProfile.username = this.refs.username.value;
        updateProfile.firstName = this.refs.firstName.value;
        updateProfile.lastName = this.refs.lastName.value;
        updateProfile.email = this.refs.email.value;
        updateProfile.socialLinks = socialLinks;

        handleEditProfileSubmit(userID, updateProfile);
    }
    render() {
        const {
            user,
            handleEditProfileState
        } = this.props;
        const {
            handleEditProfileSubmit
        } = this;

        return(
            <article className="container box style3">
                <form>
                    <section>
                        <header>
                            <h2>About</h2>
                        </header>
                        <div className="row 50%">
                            <div className="12u$">
                                <label htmlFor="username">Username&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <input id="username" ref="username" type="text" className="text" placeholder="Username" defaultValue={user.username} required />
                            </div>
                            <div className="6u 12u$(mobile)">
                                <label htmlFor="firstName">First Name&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <input id="firstName" ref="firstName" type="text" className="text" placeholder="First Name" defaultValue={user.firstName} required />
                            </div>
                            <div className="6u$ 12u$(mobile)">
                                <label htmlFor="lastName">Last Name&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <input id="lastName" ref="lastName" type="text" className="text" placeholder="Last Name" defaultValue={user.lastName} required />
                            </div>
                            <div className="12u$">
                                <label htmlFor="email">Email:</label>
                                <input id="email" ref="email" type="text" className="text" placeholder="E-mail" defaultValue={user.email} />
                            </div>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h2>Social Media</h2>
                        </header>
                        {
                            user.socialLinks.length == 0
                                ?
                                <div className="row 50%">
                                    <div className="12u$">
                                        <label htmlFor="website">Website:</label>
                                        <input id="website" ref="website" type="text" className="text" placeholder="Website Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="facebook">Facebook:</label>
                                        <input id="facebook" ref="facebook" type="text" className="text" placeholder="Facebook Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="twitter">Twitter:</label>
                                        <input id="twitter" ref="twitter" type="text" className="text" placeholder="Twitter Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="instagram">Instagram:</label>
                                        <input id="instagram" ref="instagram" type="text" className="text" placeholder="Instagram Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="googleplus">Google Plus:</label>
                                        <input id="googleplus" ref="googleplus" type="text" className="text" placeholder="Google Plus Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="linkedin">LinkedIn:</label>
                                        <input id="linkedin" ref="linkedin" type="text" className="text" placeholder="LinkedIn Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="youtube">YouTube:</label>
                                        <input id="youtube" ref="youtube" type="text" className="text" placeholder="YouTube Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="github">GitHub:</label>
                                        <input id="github" ref="github" type="text" className="text" placeholder="GitHub Profile Link" />
                                    </div>
                                    <div className="12u$">
                                        <label htmlFor="codepen">CodePen:</label>
                                        <input id="codepen" ref="codepen" type="text" className="text" placeholder="CodePen Profile Link" />
                                    </div>
                                </div>
                                :
                                <div>
                                    {
                                        user.socialLinks.map(socialLink =>
                                            <div className="row 50%">
                                                <div className="12u$">
                                                    <label htmlFor="website">Website:</label>
                                                    <input id="website" ref="website" type="text" className="text" placeholder="Website Link" defaultValue={socialLink.website} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="facebook">Facebook:</label>
                                                    <input id="facebook" ref="facebook" type="text" className="text" placeholder="Facebook Profile Link" defaultValue={socialLink.facebook} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="twitter">Twitter:</label>
                                                    <input id="twitter" ref="twitter" type="text" className="text" placeholder="Twitter Profile Link" defaultValue={socialLink.twitter} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="instagram">Instagram:</label>
                                                    <input id="instagram" ref="instagram" type="text" className="text" placeholder="Instagram Profile Link" defaultValue={socialLink.instagram} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="googleplus">Google Plus:</label>
                                                    <input id="googleplus" ref="googleplus" type="text" className="text" placeholder="Google Plus Profile Link" defaultValue={socialLink.googleplus} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="linkedin">LinkedIn:</label>
                                                    <input id="linkedin" ref="linkedin" type="text" className="text" placeholder="LinkedIn Profile Link" defaultValue={socialLink.linkedin} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="youtube">YouTube:</label>
                                                    <input id="youtube" ref="youtube" type="text" className="text" placeholder="YouTube Profile Link" defaultValue={socialLink.youtube} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="github">GitHub:</label>
                                                    <input id="github" ref="github" type="text" className="text" placeholder="GitHub Profile Link" defaultValue={socialLink.github} />
                                                </div>
                                                <div className="12u$">
                                                    <label htmlFor="codepen">CodePen:</label>
                                                    <input id="codepen" ref="codepen" type="text" className="text" placeholder="CodePen Profile Link" defaultValue={socialLink.codepen} />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                        <div className="row 50%">
                            <div className="12u$">
                                <ul className="actions">
                                    <li>
                                        <a className="button style1" onClick={handleEditProfileSubmit}>
                                            Update
                                        </a>
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