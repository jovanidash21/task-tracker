import React, { Component } from 'react';

class TaskContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {editingTask: false};
        this.handleEditTaskState = this.handleEditTaskState.bind(this);
    }
    handleEditTaskState(event) {
        event.preventDefault();

        var toggleEditingTask = !this.state.editingTask;

        this.setState({editingTask: toggleEditingTask});
    }
    render() {
        const { userTask } = this.props;
        const { editingTask } = this.state;
        const { handleEditTaskState } = this;

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