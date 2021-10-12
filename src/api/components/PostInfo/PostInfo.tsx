import React from 'react';
import { Post } from '../../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  const {
    user: userFromPost,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      {userFromPost && (
        <div className="PostInfo-User">
          <UserInfo user={userFromPost} />
        </div>
      )}
      <h2 className="PostInfo-Title">{title}</h2>
      <p className="PostInfo-Body">{body}</p>
      {comments.length && (
        <div className="PostInfo-Comments">
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
};
