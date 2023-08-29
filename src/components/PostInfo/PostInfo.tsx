import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

type PostProps = {
  post: Post;
};

export const PostInfo: React.FC<PostProps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {post.user && <UserInfo key={post.id} user={post.user} />}
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {post.comments.length === 0
      ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
      : (<CommentList key={post.id} comments={post.comments} />)}
  </div>

);
