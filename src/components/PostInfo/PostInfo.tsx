import React from 'react';

import { Post } from '../../types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__text">{post.body}</p>
    <div className="post__user">
      {post.user ? (<UserInfo user={post.user} />) : 'Anonymous'}
    </div>
    <CommentList comments={post.comments} />
  </div>
);

export default PostInfo;
