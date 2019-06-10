import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../components/notes/NoteForm';
import { newNote } from '../actions/notesActions';
import PropTypes from 'prop-types';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { title, body } = this.state;

    return (
      <>
        <NoteForm
          title={title}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          submitText='Create Note'
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
