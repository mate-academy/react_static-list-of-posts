import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title,
    user,
    body,
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
            Posted by
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length
        ? (
          <CommentList comments={comments} />
        )
        : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )}
    </div>
  );
};
