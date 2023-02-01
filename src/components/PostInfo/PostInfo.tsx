import React from 'react';
import { PostType } from '../../types/PostType';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: PostType;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    user,
    title,
    comments,
    body,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} /> }
        </p>
      </div>

      <div className="PostInfo__body">
        {body}
      </div>

      {comments?.length
        ? (
          <>
            <hr />

            <CommentList comments={comments} />
          </>
        )
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
