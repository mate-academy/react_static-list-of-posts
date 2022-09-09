import React from 'react';
import { Post } from '../../types/Post';
// import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    // userId,
    title,
    body,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted By  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {/* <CommentList> */}
    </div>
  );
};
