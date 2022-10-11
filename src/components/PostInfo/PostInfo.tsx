import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Post } from '../../types/Post';

type Props = {
  post: Post,
};

const NoCommentsYet = () => (
  <>
    <hr />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </>
);

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
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
          {' Posted by  '}

          {user && <UserInfo user={user} key={userId} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        (comments.length > 0 && <CommentList comments={comments} />)
        || <NoCommentsYet />
      }

    </div>
  );
};
