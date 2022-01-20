import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Prop = {
  post: Post,
};

export const PostInfo: React.FC<Prop> = ({ post }) => {
  return (
    <li className="postList__item">
      <div className="postList__content">
        <h2 className="postList__title">{post.title}</h2>
        <p className="postList__text">{post.body}</p>
        {post.user ? <UserInfo user={post.user} /> : ''}
      </div>
      <CommentList comments={post.comments} />
    </li>
  );
};
