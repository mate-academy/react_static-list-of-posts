import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <CommentList comments={post.comments} />
  </div>
);
