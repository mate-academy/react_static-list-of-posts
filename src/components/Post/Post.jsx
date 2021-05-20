import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import '../Post/post.scss';

const Post = ({ title, body, user, comments }) => (
  <div className='post'>
    <h2>{title}</h2>
    <p>{body}</p>
    <div>
      <User {...user} />
    </div>
    <div>
      <CommentList comments={comments} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Post;
