import React from 'react';
import PropTypes from 'prop-types';
import { PostPropTypes } from '../../propTypes/PostPropTypes';
import { CommentPropTypes } from '../../propTypes/CommentPropTypes';
import { UserPropTypes } from '../../propTypes/UserPropTypes';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';

export function Post({ post, comments, users }) {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-text">{post.body}</p>
      {users
        .filter(user => user.id === post.userId)
        .map(user => (
          <User key={user.id} {...user} />
        ))}
      <CommentList comments={comments} post={post} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape(PostPropTypes).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(UserPropTypes)).isRequired,
};
