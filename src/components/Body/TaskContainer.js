import React, { Component } from 'react';
import moment from 'moment-timezone';

class TaskContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {editingTask: false};
        this.tasksDetails = this.tasksDetails.bind(this);
        this.handleEditTaskState = this.handleEditTaskState.bind(this);
    }

    tasksDetails() {
        const { userTask } = this.props;

        return (
            <div>
                <hr />
                <p>
                    <b>
                        Created :&nbsp;
                    </b>
                    {
                        moment(userTask.createdAt)
                            .tz("Asia/Manila")
                            .format("MMM DD, YYYY hh:mm A")
                    }
                </p>
                <p>
                    <b>
                        Last Updated :&nbsp;
                    </b>
                    {
                        moment(userTask.updatedAt)
                            .tz("Asia/Manila")
                            .format("MMM DD, YYYY hh:mm A")
                    }
                </p>
                <p>
                    <b>
                        Status :&nbsp;
                    </b>
                    {
                        userTask.isComplete == false
                            ?
                            "Undone"
                            :
                            "Done"
                    }
                </p>
            </div>
        )
    }
    handleEditTaskState(event) {
        event.preventDefault();

        var toggleEditingTask = !this.state.editingTask;

        this.setState({editingTask: toggleEditingTask});
    }
    render() {
        const { userTask } = this.props;
        const { editingTask } = this.state;
        const {
            tasksDetails,
            handleEditTaskState
        } = this;

        return(
            <article className="container box style3">
                {
                    editingTask == false
                        ?
                        <form>
                            <section>
                                <header>
                                    <h3>
                                        {userTask.name}
                                    </h3>
                                </header>
                                {
                                    tasksDetails()
                                }
                                <div className="row 50%">
                                    <div className="12u$">
                                        <ul className="actions">
                                            <li>
                                                <a className="button style1" onClick={handleEditTaskState}>
                                                    Edit Task
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
                                        <ul className="actions">
                                            <li>
                                                <input type="submit" value="Update" />
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