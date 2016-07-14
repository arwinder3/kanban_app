import React from "react";

export default class Note extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };

        this.handleOnClick = this.handleOnClick.bind(this);

        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
    }

    handleOnClick() {
        this.setState({
            editMode: true
        });
        console.log(this.refs.taskInput);
    }

    handleTaskChange(e) {
        this.finishEdit(e);
    }

    handleOnBlur(e) {
        this.finishEdit(e);
    }

    handleOnKeyPress(e) {
        if (e.key && e.key === "Enter") {
            this.finishEdit(e);
        }
    }

    finishEdit(e) {
        this.props.onEditTask(this.props.noteId, e.target.value);
        this.setState({
            editMode: false
        });
    }

    render() {
        return (this.state.editMode) ?
            this.renderEdit() : this.renderNote();
    }

    renderEdit() {
        return (
            <div>
                <input
                    ref="taskInput"
                    type="text"
                    autoFocus={true}
                    defaultValue={this.props.task}
                    onBlur={this.handleOnBlur}
                    onKeyPress={this.handleOnKeyPress}/>
            </div>
        );
    }

    renderNote() {
        return (
            <div onClick={this.handleOnClick}>
                <span>{this.props.task}</span>
            </div>
        );
    }

}

Note.propTypes = {
    onEditTask: React.PropTypes.func.isRequired
};
