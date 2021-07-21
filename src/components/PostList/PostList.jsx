import React from 'react';
import './PostList.scss';

import { CommentList } from '../CommentList/CommentList';
import { Post } from '../Post';
import { User } from '../User';
import { postListPropTypes } from '../TypesOfProp';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post post={post} />
        <User user={post.user} />
        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);

PostList.propTypes = postListPropTypes;
