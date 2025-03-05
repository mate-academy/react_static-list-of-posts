import React from 'react';
import '../PostInfo/PostInfo.scss';

import { Post } from '../Types/Posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>
          <p>
            {' Posted by  '}
            <UserInfo user={post.user} />
          </p>
        </div>
        <p className="PostInfo__body">{post.body}</p>
        <CommentList comments={post.comments} />
      </div>
    </>
  );
};
