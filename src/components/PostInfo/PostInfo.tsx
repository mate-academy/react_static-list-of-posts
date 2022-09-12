import React from 'react';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostType = {
  post: Posts;
};

export const PostInfo: React.FC<PostType> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {user ? <UserInfo user={user} /> : 'Anonymous'}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {comments.length && <CommentList comments={comments} />}
    </div>
  );
};
