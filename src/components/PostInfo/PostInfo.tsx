import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    comment,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {
            user
            && <UserInfo user={user} />
          }
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comment
          ? <CommentList comments={comment} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
