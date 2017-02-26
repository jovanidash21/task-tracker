import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import TaskContainer from './TaskContainer';

class TasksList extends Component {
    constructor(props) {
        super(props);
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

            return(
                <div>
                    <article className="container box style3">
                        <header>
                            <h2>My Tasks</h2>
                        </header>
                    </article>
                    {
                        userTasks.tasks.map(userTask =>
                            <TaskContainer
                                key={userTask._id}
                                userTask={userTask} />
                        )
                    }
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        userTasksDataFetch: `/api/${props.user._id}/tasks`
    }
})(TasksList);