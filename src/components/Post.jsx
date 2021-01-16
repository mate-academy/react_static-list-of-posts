import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { PostType } from './Types';

import './Post.scss';

export const Post = ({ post }) => (
  <div className="postItem">
    <div className="postTitle">{post.title}</div>

    {post.body}

    <User user={post.user} />

    <CommentList comments={post.comment} />

  </div>
);

Post.propTypes = PostType.isRequired;
