import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';
import users from '../../api/users';
import comments from '../../api/comments';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ posts }) => (
  posts.map(post => (
    <div className="post-list__post post" key={post.id}>
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <User user={users.find(user => user.id === post.userId)} />
      <CommentList comments={comments.filter(
        comment => comment.postId === post.id,
      )}
      />
    </div>
  ))
);

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
