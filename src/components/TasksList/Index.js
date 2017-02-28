import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import TaskContainer from './TaskContainer';

class TasksList extends Component {
    constructor(props) {
        super(props);

        this.state = {tasksFilter: 'allTasks'};
        this.handleTasksFilterState = this.handleTasksFilterState.bind(this);
        this.handleAddTaskStart = this.handleAddTaskStart.bind(this);
        this.handleAddTaskEnd = this.handleAddTaskEnd.bind(this);
        this.handleDeleteAllTasksSubmit = this.handleDeleteAllTasksSubmit.bind(this);
        this.handleEditTaskNameSubmit = this.handleEditTaskNameSubmit.bind(this);
        this.handleEditTaskStatusSubmit = this.handleEditTaskStatusSubmit.bind(this);
        this.handleDeleteTaskSubmit = this.handleDeleteTaskSubmit.bind(this);
    }
    handleTasksFilterState(event) {
        event.preventDefault();

        this.setState({tasksFilter: event.target.value});
    }
    handleAddTaskStart(event) {
        event.preventDefault();

        const { user, addTaskStart } = this.props;

        addTaskStart(user._id);
    }
    handleAddTaskEnd(event) {
        event.preventDefault();

        const { user, addTaskEnd } = this.props;

        addTaskEnd(user._id);
    }
    handleDeleteAllTasksSubmit(event) {
        event.preventDefault();

        const { user, deleteAllTasks } = this.props;

        deleteAllTasks(user._id);
    }
    handleEditTaskNameSubmit(userID, taskID, updateTask) {
        const { editTask } = this.props;

        editTask(userID, taskID, updateTask);
    }
    handleEditTaskStatusSubmit(userID, taskID, updateTask) {
        const { editTask } = this.props;

        editTask(userID, taskID, updateTask);
    }
    handleDeleteTaskSubmit(userID, taskID) {
        const { deleteAllTasks } = this.props;

        deleteAllTasks(userID, taskID);
    }
    render() {
        const { userTasksDataFetch } = this.props;
        const allUserTasksDataFetch = PromiseState.all([userTasksDataFetch]);

        if (allUserTasksDataFetch.pending) {
            return (
                <article className="container box style3">
                    <LoadingAnimation />
                </article>
            );
        }
        else if (allUserTasksDataFetch.rejected) {
            return <Error error={allUserTasksDataFetch.reason} />
        }
        else if (allUserTasksDataFetch.fulfilled) {
            const [ userTasksData ] = allUserTasksDataFetch.value;
            const userTasks = userTasksData.userTasks;
            const { user } = this.props;
            const { tasksFilter } = this.state;
            const {
                handleTasksFilterState,
                handleAddTaskStart,
                handleAddTaskEnd,
                handleDeleteAllTasksSubmit,
                handleEditTaskNameSubmit,
                handleEditTaskStatusSubmit,
                handleDeleteTaskSubmit
            } = this;

            return(
                <div>
                    <article className="container box style3">
                        <form>
                            <div className="row">
                                <div className="12u">
                                    <select value={tasksFilter} onChange={handleTasksFilterState}>
                                        <option value="allTasks">All Tasks</option>
                                        <option value="doneTasks">Done Tasks</option>
                                        <option value="undoneTasks">Undone Tasks</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </article>
                    <article className="container box style3">
                        <form>
                            <div className="row 50%">
                                <div className="12u$">
                                    <ul className="actions">
                                        <li>
                                            <a className="button style1" onClick={handleAddTaskStart}>
                                                Add
                                            </a>
                                        </li>
                                        <li>
                                            {
                                                tasksFilter == 'doneTasks'
                                                    ?
                                                    <a className="button style3" >
                                                        Mark All Undone
                                                    </a>
                                                    :
                                                    <a className="button style3" >
                                                        Mark All Done
                                                    </a>
                                            }
                                        </li>
                                        <li>
                                            <a className="button style5" onClick={handleDeleteAllTasksSubmit}>
                                                Delete Done Tasks
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </article>
                    {
                        tasksFilter == 'allTasks'
                            ?
                            userTasks.tasks.map(userTask =>
                                <TaskContainer
                                    key={userTask._id}
                                    user={user}
                                    userTask={userTask}
                                    handleEditTaskNameSubmit={handleEditTaskNameSubmit}
                                    handleEditTaskStatusSubmit={handleEditTaskStatusSubmit}
                                    handleDeleteTaskSubmit={handleDeleteTaskSubmit}
                                />
                            )
                            :
                            tasksFilter == 'doneTasks'
                                ?
                                userTasks.tasks.filter(userTask =>
                                    userTask.isComplete == true
                                ).map(userTask =>
                                    <TaskContainer
                                        key={userTask._id}
                                        user={user}
                                        userTask={userTask}
                                        handleEditTaskNameSubmit={handleEditTaskNameSubmit}
                                        handleEditTaskStatusSubmit={handleEditTaskStatusSubmit}
                                        handleDeleteTaskSubmit={handleDeleteTaskSubmit}
                                    />
                                )
                                :
                                userTasks.tasks.filter(userTask =>
                                    userTask.isComplete == false
                                ).map(userTask =>
                                    <TaskContainer
                                        key={userTask._id}
                                        user={user}
                                        userTask={userTask}
                                        handleEditTaskNameSubmit={handleEditTaskNameSubmit}
                                        handleEditTaskStatusSubmit={handleEditTaskStatusSubmit}
                                        handleDeleteTaskSubmit={handleDeleteTaskSubmit}
                                    />
                                )
                    }
                    <article className="container box style3">
                        <form>
                            <div className="row 50%">
                                <div className="12u$">
                                    <ul className="actions">
                                        <li>
                                            <a className="button style1" onClick={handleAddTaskEnd}>
                                                Add
                                            </a>
                                        </li>
                                        <li>
                                            {
                                                tasksFilter == 'doneTasks'
                                                    ?
                                                    <a className="button style3" >
                                                        Mark All Undone
                                                    </a>
                                                    :
                                                    <a className="button style3" >
                                                        Mark All Done
                                                    </a>
                                            }
                                        </li>
                                        <li>
                                            <a className="button style5" onClick={handleDeleteAllTasksSubmit}>
                                                Delete Done Tasks
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            )
        }
    }
}

export default connect((props) => {
    const refreshUserTasksData = {
        userTasksDataFetch: {
            url: `/api/${props.user._id}/tasks`,
            force: true,
            refreshing: true
        }
    };

    return {
        userTasksDataFetch: `/api/${props.user._id}/tasks`,
        addTaskStart: (userID) => ({
            addTaskStartFetch: {
                url: `/api/${userID}/tasks/start`,
                method: 'POST',
                andThen: () => (refreshUserTasksData)
            }
        }),
        addTaskEnd: (userID) => ({
            addTaskStartFetch: {
                url: `/api/${userID}/tasks/end`,
                method: 'POST',
                andThen: () => (refreshUserTasksData)
            }
        }),
        deleteAllTasks: (userID) => ({
            addTaskStartFetch: {
                url: `/api/${userID}/tasks`,
                method: 'DELETE',
                andThen: () => (refreshUserTasksData)
            }
        }),
        editTask: (userID, taskID, updateTask) => ({
            addTaskStartFetch: {
                url: `/api/${userID}/task/${taskID}`,
                method: 'PATCH',
                body: JSON.stringify(updateTask),
                andThen: () => (refreshUserTasksData)
            }
        }),
        deleteTask: (userID, taskID) => ({
            addTaskStartFetch: {
                url: `/api/${userID}/task/${taskID}`,
                method: 'DELETE',
                andThen: () => (refreshUserTasksData)
            }
        })
    }
})(TasksList);