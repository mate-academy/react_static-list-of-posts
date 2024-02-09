import React from 'react';
import './PostInfo.scss';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Posts,
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
    comments,
  },
}) => {
  const renderComments = () => {
    if (!comments?.length) {
      return (<b data-cy="NoCommentsMessage">No comments yet</b>);
    }

    return (<CommentList comments={comments} />);
  };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {renderComments()}
    </div>
  );
};
