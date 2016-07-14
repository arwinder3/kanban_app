import React from "react";

import Note from "./Note";

export default class Notes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const notes = this.props.notes;

        return (
            <div>
                <ul>
                    {notes.map(
                        note =>
                        <li key={note.id}>
                            <Note
                                task={note.task}
                                noteId={note.id}
                                onEditTask={this.props.onEditTask}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

Notes.propTypes = {
    onEditTask: React.PropTypes.func.isRequired
};
