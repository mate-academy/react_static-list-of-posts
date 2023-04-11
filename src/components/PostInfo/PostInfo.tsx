import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

type PostProp = {
  post: Post;
};

export const PostInfo: React.FC<PostProp> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments ? (
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
