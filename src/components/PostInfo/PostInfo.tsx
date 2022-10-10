import React from 'react';
import { Post } from '../../Interfaces/Posts';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type PostProps = {
  post: Post
};

export const PostInfo: React.FC<PostProps> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length > 0
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </li>
  );
};
