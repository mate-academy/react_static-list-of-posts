import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="post__comments">
    {comments.map(comment => (
      <div className="post__comment" key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </div>
    ))}
  </div>
);

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
