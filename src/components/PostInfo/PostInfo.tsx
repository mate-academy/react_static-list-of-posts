import React from 'react';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} /> }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comment?.length ? <CommentList comments={comment} />
        : <p>No comments</p>}
    </div>
  );
};
