import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation/Index';
import Error from './Error/Index';
import Header from './Header/Index';
import Body from './Body/Index';
import Footer from './Footer/Index';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editingProfile: false
        };
        this.handleEditProfileState = this.handleEditProfileState.bind(this);
    }
    handleEditProfileState(event) {
        event.preventDefault();

        var toggleEditingProfile = !this.state.editingProfile;

        this.setState({
            editingProfile: toggleEditingProfile
        });
    }
    render() {
        const { userDataFetch } = this.props;

        if (userDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [user] = userDataFetch.value;

            return(
                <div>
                    <Header
                        user={user}
                        editingProfileState={this.state.editingProfile}
                        handleEditProfileState={this.handleEditProfileState}
                    />
                    <Body
                        user={user}
                        editingProfileState={this.state.editingProfile}
                        handleEditProfileState={this.handleEditProfileState}
                    />
                    <Footer
                        user={user}
                        editingProfileState={this.state.editingProfile}
                        handleEditProfileState={this.handleEditProfileState}
                    />
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: `/api/user`
    }
})(App);