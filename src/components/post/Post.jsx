import React from 'react';

import { CommentList } from '../CommentList/CommentList';
import { ProtoPost } from '../ProtoPost';
import { User } from '../User/User';

export const Post = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>
      {post.body}
    </p>
    <User post={post} />
    <CommentList post={post} />
  </>
);

Post.propTypes = ProtoPost;
