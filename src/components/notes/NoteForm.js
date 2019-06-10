import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, submitText, title, body }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} />
      <input type="text" name="body" value={body} onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;
