import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <User {...user} />
    <div className="post-body">
      <div className="post-title">
        {`Post: ${title}`}
      </div>
      <p>
        {body}
      </p>
    </div>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
