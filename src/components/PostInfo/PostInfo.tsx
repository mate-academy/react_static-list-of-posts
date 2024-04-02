import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${post.user?.email}`}>
            {post.user?.name}
          </a>
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <CommentList comments={post.comment} />
    </div>
  );
};
