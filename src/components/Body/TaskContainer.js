import React, { Component } from 'react';

class TaskContainer extends Component {
    render() {
        const { userTask } = this.props;

        return(
            <article className="container box style3">
                <section>
                    <header>
                        <h3>
                            {userTask.name}
                        </h3>
                    </header>
                </section>
            </article>
        )
    }
}

export default TaskContainer;