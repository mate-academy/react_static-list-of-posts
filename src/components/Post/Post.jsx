import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { postTypes } from '../../postTypes';


import comments from '../../api/comments';
import users from '../../api/users';
import './Post.scss';

export const Post = ({ post }) => (
  <>
    <h2 className="post__titel">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <User users={users} post={post} />
    <CommentList comments={comments} post={post} />
  </>
);

Post.propTypes = {
  post: PropTypes.objectOf(postTypes).isRequired,
};
