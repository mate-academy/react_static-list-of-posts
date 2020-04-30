import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentsList.css';

function CommentsList({ comments }) {
  return (
    <div key="CommentsList" className="post__comments-list">
      <p className="post__comments-list_title">
        Comments:
      </p>
      {comments.map(comment => (
        <Comment
          key={comment.body}
          id={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))}
    </div>
  );
}

export default CommentsList;

CommentsList.propTypes = PropTypes.arrayOf({}).isRequired;
