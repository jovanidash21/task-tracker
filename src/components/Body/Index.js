import React, { Component } from 'react';
import TasksList from './TasksList';
import EditProfile from './EditProfile';

class Body extends Component {
    render() {
        const { user, editingProfileState, handleEditProfileState } = this.props;

        return(
            editingProfileState == false
                ?
                <TasksList
                    user={user}
                />
                :
                <EditProfile
                    user={user}
                    handleEditProfileState={handleEditProfileState}
                />
        )
    }
}

export default Body;