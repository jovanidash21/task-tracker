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
    this.handleDeleteFinishedTasksSubmit = this.handleDeleteFinishedTasksSubmit.bind(this);
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
  handleDeleteFinishedTasksSubmit(event) {
    event.preventDefault();

    const { user, deleteFinishedTasks } = this.props;

    deleteFinishedTasks(user._id);
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
    const { deleteTask } = this.props;

    deleteTask(userID, taskID);
  }
  render() {
    const { userTasksDataFetch } = this.props;
    const allUserTasksDataFetch = PromiseState.all([userTasksDataFetch]);

    if (allUserTasksDataFetch.pending) {
      return (
        <article className="container box style3" style={{padding: "50px"}}>
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
        handleDeleteFinishedTasksSubmit,
        handleEditTaskNameSubmit,
        handleEditTaskStatusSubmit,
        handleDeleteTaskSubmit
      } = this;

      return(
        <div>
          <article className="container box style3">
            <form>
              <section>
                <header>
                  <h2>
                    {
                      userTasks.tasks.filter(userTask =>
                        userTask.isComplete == true
                      ).length
                    }
                    &nbsp;out of&nbsp;
                    {
                      userTasks.tasks.length
                    }
                    &nbsp;
                    {
                      userTasks.tasks.length > 1
                        ? "tasks"
                        : "task"
                    }
                    &nbsp;finished
                  </h2>
                </header>
                <div className="row 50%">
                  <div className="12u$">
                    <select value={tasksFilter} onChange={handleTasksFilterState}>
                      <option value="allTasks">All Tasks</option>
                      <option value="finishedTasks">Finished Tasks</option>
                      <option value="unfinishedTasks">Unfinished Tasks</option>
                    </select>
                  </div>
                </div>
                <div className="row 50%">
                  <div className="12u$">
                    <ul className="actions">
                      <li>
                        <a className="button style1" onClick={handleAddTaskStart}>
                          Add at the Start
                        </a>
                      </li>
                      <li>
                        {
                          tasksFilter == 'unfinishedTasks' ||
                          userTasks.tasks.filter(userTask =>
                            userTask.isComplete == true
                          ).length == 0
                            ?
                            ""
                            :
                            <a className="button style5" onClick={handleDeleteFinishedTasksSubmit}>
                              Delete Finished Tasks
                            </a>
                        }
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
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
              tasksFilter == 'finishedTasks'
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
              <section>
                <div className="row 50%">
                  <div className="12u$">
                    <ul className="actions">
                      <li>
                        <a className="button style1" onClick={handleAddTaskEnd}>
                          Add at the End
                        </a>
                      </li>
                      <li>
                        {
                          tasksFilter == 'unfinishedTasks' ||
                          userTasks.tasks.filter(userTask =>
                            userTask.isComplete == true
                          ).length == 0
                            ?
                            ""
                            :
                            <a className="button style5" onClick={handleDeleteFinishedTasksSubmit}>
                              Delete Finished Tasks
                            </a>
                        }
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row 50%">
                  <div className="12u$">
                    <select value={tasksFilter} onChange={handleTasksFilterState}>
                      <option value="allTasks">All Tasks</option>
                      <option value="finishedTasks">Finished Tasks</option>
                      <option value="unfinishedTasks">Unfinished Tasks</option>
                    </select>
                  </div>
                </div>
                <header>
                  <h2>
                    {
                      userTasks.tasks.filter(userTask =>
                        userTask.isComplete == true
                      ).length
                    }
                    &nbsp;out of&nbsp;
                    {
                      userTasks.tasks.length
                    }
                    &nbsp;
                    {
                      userTasks.tasks.length > 1
                        ? "tasks"
                        : "task"
                    }
                    &nbsp;finished
                  </h2>
                </header>
              </section>
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
        force: true,
        refreshing: true,
        andThen: () => (refreshUserTasksData)
      }
    }),
    addTaskEnd: (userID) => ({
      addTaskEndFetch: {
        url: `/api/${userID}/tasks/end`,
        method: 'POST',
        force: true,
        refreshing: true,
        andThen: () => (refreshUserTasksData)
      }
    }),
    deleteFinishedTasks: (userID) => ({
      deleteFinishedTasksFetch: {
        url: `/api/${userID}/tasks`,
        method: 'DELETE',
        force: true,
        refreshing: true,
        andThen: () => (refreshUserTasksData)
      }
    }),
    editTask: (userID, taskID, updateTask) => ({
      editTaskFetch: {
        url: `/api/${userID}/task/${taskID}`,
        method: 'PATCH',
        force: true,
        refreshing: true,
        body: JSON.stringify(updateTask),
        andThen: () => (refreshUserTasksData)
      }
    }),
    deleteTask: (userID, taskID) => ({
      deleteTaskFetch: {
        url: `/api/${userID}/task/${taskID}`,
        method: 'DELETE',
        force: true,
        refreshing: true,
        andThen: () => (refreshUserTasksData)
      }
    })
  }
})(TasksList);
