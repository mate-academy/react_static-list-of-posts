import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo user={post.user} />
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>

      <div className="CommentList">
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
};
