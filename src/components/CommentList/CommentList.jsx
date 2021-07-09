import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';

export const CommentList = ({ allComents }) => (
  <>
    <ul className="post--comment">
      <h3>Comment</h3>
      {allComents.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name + ' _-_-_- ' + comment.email}</h4>
          <div>{comment.body}</div>
        </li>
      ))}
    </ul>
  </>
);

CommentList.propTypes = {
  allComents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
};

CommentList.defaultProps = {
  allComents: ['no comment'],
};
