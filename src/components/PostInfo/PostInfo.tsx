import React from 'react';
import { FullPostInfo } from '../../types/FullPostInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

interface Props {
  post: FullPostInfo;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {post.comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />}
    </div>
  );
};
