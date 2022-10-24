import React from 'react';
import { Post } from '../../Types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        )}

      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
