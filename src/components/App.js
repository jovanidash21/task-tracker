import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation/Index';
import Error from './Error/Index';
import Header from './Header/Index';
import TasksList from './TasksList/Index';
import EditProfile from './EditProfile/Index';
import Footer from './Footer/Index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {editingProfile: false};
    this.handleEditProfileState = this.handleEditProfileState.bind(this);
    this.handleEditProfileSubmit = this.handleEditProfileSubmit.bind(this);
  }
  handleEditProfileState(event) {
    event.preventDefault();

    var toggleEditingProfile = !this.state.editingProfile;

    this.setState({editingProfile: toggleEditingProfile});
  }
  handleEditProfileSubmit(userID, updateProfile) {
    const { editProfile } = this.props;

    editProfile(userID, updateProfile);

    this.setState({editingProfile: false});
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
      const [ user ] = userDataFetch.value;
      const { editingProfile } = this.state;
      const {
        handleEditProfileState,
        handleEditProfileSubmit
      } = this;

      return(
        <div>
          <Header
            user={user}
            editingProfileState={editingProfile}
            handleEditProfileState={handleEditProfileState}
          />
          {
            editingProfile == false
              ?
              <TasksList
                user={user}
                editingProfileState={editingProfile}
                handleEditProfileState={handleEditProfileState}
                handleEditProfileSubmit={handleEditProfileSubmit}
              />
              :
              <EditProfile
                user={user}
                editingProfileState={editingProfile}
                handleEditProfileState={handleEditProfileState}
                handleEditProfileSubmit={handleEditProfileSubmit}
              />
          }
          <Footer
            user={user}
            editingProfileState={editingProfile}
            handleEditProfileState={handleEditProfileState}
          />
        </div>
      )
    }
  }
}

export default connect(() => {
  const refreshUserData = {
    userDataFetch: {
      url: `/api/user`,
      force: true,
      refreshing: true
    }
  };

  return {
    userDataFetch: `/api/user`,
    editProfile: (userID, updateProfile) => ({
      editProfileFetch: {
        url: `/api/${userID}/`,
        method: 'PATCH',
        body: JSON.stringify(updateProfile),
        then: () => (refreshUserData)
      }
    })
  }
})(App);
