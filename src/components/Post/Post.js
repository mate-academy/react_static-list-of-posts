import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

import comments from '../../api/comments';

const Post = ({ post }) => {
  const {
    id, title, body, userId,
  } = post;
  const commentList = comments.filter(comment => comment.postId === id);

  return (
    <div className="post">
      <div className="post__author">
        <User userId={userId} />
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <div className="post__comments">
        <CommentList comments={commentList} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
};

export default Post;
