import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import PropTypes from 'prop-types';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className='postTitle'>
      {title.toUpperCase()}
    </h2>
    <p className="postTxt">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  // eslint-disable-next-line
  user: PropTypes.object.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Post.defaultProps = {
  body: 'No text here',
};
