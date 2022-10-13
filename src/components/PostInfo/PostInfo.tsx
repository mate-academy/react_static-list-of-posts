import React from 'react';
import './PostInfo.scss';
import { FullPost } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: FullPost
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          { `Posted by ${user?.username}:` }
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length > 0
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <p data-cy="NoCommentsMessage">
              No comments yet
            </p>
          </>
        )}
    </div>
  );
};
