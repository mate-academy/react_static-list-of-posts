import React from 'react';

import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

import { CommentsList } from '../CommentList';

import './PostItem.scss';

type Props = {
  post: Post;
};

export const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <article className="PostItem">
      <h2 className="PostItem__title">{post.title.toUpperCase()}</h2>
      <p className="PostItem__body">{post.body}</p>
      <div className="PostItem__picture-container">
        <img
          className="PostItem__picture"
          src="/images/image-placeholder.svg"
          alt="React"
        />
      </div>
      {post.user && <UserInfo user={post.user} />}
      <CommentsList comments={post.comments} />
    </article>
  );
};
