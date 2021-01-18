import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post/Post';
import { User } from '../user/User';
import { CommentList } from '../commentlist/Commentlist';

import { typePost } from '../types/propTypesCollection';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <>
        <Post post={post} key={post.id} />
        <User user={post.user} />
        <CommentList comments={post.comment} />
      </>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(typePost).isRequired,
};
