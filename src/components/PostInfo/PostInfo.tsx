import React from 'react';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {post.comments && <CommentList comments={post.comments} />}
    </div>
  );
};
