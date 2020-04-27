import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import './CommentList.css';

const CommentsList = ({ comments }) => (
  <section>
    <ul className="commentList">
      {comments.map(comment => (
        <li key={comment.id} className="commentList__item">
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))}
    </ul>
  </section>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentsList;
