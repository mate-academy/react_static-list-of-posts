import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => (
  <div className="comment_list">
    {props.comments.map(comment => (
      <div>
        <p className="App__comment_email">{comment.email}</p>
        <p className="App__comment_name">{comment.name}</p>
        <p className="App__comment_body">{comment.body}</p>
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default CommentList;
