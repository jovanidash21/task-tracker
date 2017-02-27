import React, { Component } from 'react';
import moment from 'moment-timezone';

class TaskContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {editingTask: false};
        this.tasksDetails = this.tasksDetails.bind(this);
        this.handleEditTaskState = this.handleEditTaskState.bind(this);
        this.handleEditTaskNameSubmit = this.handleEditTaskNameSubmit.bind(this);
        this.handleEditTaskStatusSubmit = this.handleEditTaskStatusSubmit.bind(this);
        this.handleDeleteTaskSubmit = this.handleDeleteTaskSubmit.bind(this);
    }
    tasksDetails() {
        const { userTask } = this.props;

        return (
            <div>
                <hr />
                <ul className="menu">
                    <li>
                        <b>
                            Created :&nbsp;
                        </b>
                        {
                            moment(userTask.createdAt)
                                .tz("Asia/Manila")
                                .format("MMM DD, YYYY hh:mm A")
                        }
                    </li>
                    <li>
                        <b>
                            Last Updated :&nbsp;
                        </b>
                        {
                            moment(userTask.updatedAt)
                                .tz("Asia/Manila")
                                .format("MMM DD, YYYY hh:mm A")
                        }
                    </li>
                </ul>
            </div>
        )
    }
    handleEditTaskState(event) {
        event.preventDefault();

        var toggleEditingTask = !this.state.editingTask;

        this.setState({editingTask: toggleEditingTask});
    }
    handleEditTaskNameSubmit(event) {
        event.preventDefault();

        const {
            user,
            userTask,
            handleEditTaskNameSubmit,
        } = this.props;
        let userID = user._id;
        let taskID = userTask._id;
        let updateTask = userTask;

        updateTask.name = this.refs.taskName.value;

        handleEditTaskNameSubmit(userID, taskID, updateTask);

        this.setState({editingTask: false});
    }
    handleEditTaskStatusSubmit(event) {
        event.preventDefault();

        const {
            user,
            userTask,
            handleEditTaskStatusSubmit,
        } = this.props;
        let userID = user._id;
        let taskID = userTask._id;
        let updateTask = userTask;

        updateTask.isComplete = !updateTask.isComplete;

        handleEditTaskStatusSubmit(userID, taskID, updateTask);
    }
    handleDeleteTaskSubmit(event) {
        event.preventDefault();

        const {
            user,
            userTask,
            handleDeleteTaskSubmit,
        } = this.props;
        let userID = user._id;
        let taskID = userTask._id;

        handleDeleteTaskSubmit(userID, taskID)
    }
    render() {
        const { userTask } = this.props;
        const { editingTask } = this.state;
        const {
            tasksDetails,
            handleEditTaskState,
            handleEditTaskNameSubmit,
            handleEditTaskStatusSubmit,
            handleDeleteTaskSubmit
        } = this;

        return(
            <article className="container box style3">
                {
                    editingTask == false
                        ?
                        <form>
                            <section>
                                <header>
                                    {
                                        userTask.isComplete == false
                                            ?
                                            <h3>
                                                {userTask.name}
                                            </h3>
                                            :
                                            <div>
                                                <i className="fa fa-check-square-o" />
                                                <h3>
                                                    <strike>
                                                        {userTask.name}
                                                    </strike>
                                                </h3>
                                            </div>
                                    }
                                </header>
                                {
                                    tasksDetails()
                                }
                                <div className="row 50%">
                                    <div className="12u$">
                                        <hr />
                                        <ul className="actions">
                                            <li>
                                                <a className="button style1" onClick={handleEditTaskState}>
                                                    Edit
                                                </a>
                                            </li>
                                            <li>
                                                {
                                                    userTask.isComplete == false
                                                        ?
                                                        <a className="button style3" onClick={handleEditTaskStatusSubmit}>
                                                            Mark Done
                                                        </a>
                                                        :
                                                        <a className="button style3" onClick={handleEditTaskStatusSubmit}>
                                                            Mark Undone
                                                        </a>
                                                }
                                            </li>
                                            <li>
                                                <a className="button style5" onClick={handleDeleteTaskSubmit}>
                                                    Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </form>
                        :
                        <form>
                            <section>
                                <header>
                                    <input ref="taskName" type="text" className="text" placeholder="Task Name" defaultValue={userTask.name}/>
                                </header>
                                {
                                    tasksDetails()
                                }
                                <div className="row 50%">
                                    <div className="12u$">
                                        <hr />
                                        <ul className="actions">
                                            <li>
                                                <a className="button style1" onClick={handleEditTaskNameSubmit}>
                                                    Update
                                                </a>
                                            </li>
                                            <li>
                                                <a className="button style3" onClick={handleEditTaskState}>
                                                    Cancel
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </form>
                }
            </article>
        )
    }
}

export default TaskContainer;