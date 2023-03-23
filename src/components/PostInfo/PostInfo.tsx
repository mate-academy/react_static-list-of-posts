import React from 'react';
import './PostInfo.scss';
import { FullPost } from '../../types/fullPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Post = {
  post: FullPost;
};

export const PostInfo: React.FC<Post> = ({ post }) => {
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

      <hr />

      {
        comments.length === 0
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={comments} />
      }

    </div>
  );
};
