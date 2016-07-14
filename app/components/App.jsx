import React from "react";
import uuid from "node-uuid";

import Notes from "./Notes";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: "Learn Webpack"
                },
                {
                    id: uuid.v4(),
                    task: "Eat food"
                },
                {
                    id: uuid.v4(),
                    task: "Clean dishes"
                }
            ],
            newTaskText: "Add Task..."
        };

        this.handleAddNewTaskOnClick = this.handleAddNewTaskOnClick.bind(this);
        this.handleNewTaskTextChange = this.handleNewTaskTextChange.bind(this);
        this.handleNewTaskOnClick = this.handleNewTaskOnClick.bind(this);
        this.onEditTask = this.onEditTask.bind(this);
    }

    handleAddNewTaskOnClick() {
        this.setState({
            notes: [...this.state.notes, {id: uuid.v4(), task: this.state.newTaskText}],
            newTaskText: "Add another task..."
        });
    }

    handleNewTaskTextChange(event) {
        this.setState({
            newTaskText: event.target.value
        });
    }

    handleNewTaskOnClick() {
        this.setState({
            newTaskText: (this.state.newTaskText === "Add Task..." || this.state.newTaskText === "Add another task...") ? "" : this.state.newTaskText
        });
    }

    onEditTask(id, newText) {
        this.setState({
            notes: this.state.notes.map((note) => {
                if (note.id === id) {
                    note.task = newText;
                }
                return note;
            })
        });
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <Notes
                    notes={notes}
                    onEditTask={this.onEditTask}/>
                <div>
                    <input
                        type="text"
                        value={this.state.newTaskText}
                        onChange={this.handleNewTaskTextChange}
                        onClick={this.handleNewTaskOnClick} />
                    <button onClick={this.handleAddNewTaskOnClick}>+</button>
                </div>
            </div>
        );
    }

}
