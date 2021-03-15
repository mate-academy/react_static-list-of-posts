import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import CommentsList from '../CommentsList/CommentsList';

const Post = ({ postInfo }) => (
  <div className="post">
    <div className="post__author">
      <div className="post__author-name">
        {postInfo.user.name}
      </div>
      <div className="post__author-email">
        {postInfo.user.email}
      </div>
    </div>
    <div className="post__title">
      {postInfo.title}
    </div>
    <div className="post__text">
      {postInfo.body}
    </div>
    <CommentsList list={postInfo.comments} />
  </div>
);

Post.propTypes = {
  postInfo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.object.isRequired,
    ).isRequired,
  }).isRequired,
};

export default Post;
