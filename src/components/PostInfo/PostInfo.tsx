import React from 'react';
import { FullPost } from '../../types/FullPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: FullPost,
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

        {user
        && (
          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        ) }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      { comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
