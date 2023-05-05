import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

interface PostProps {
  post: Post;
}

export const PostInfo: React.FC<PostProps> = ({ post }) => {
  const {
    title, user, body, comments,
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

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments && comments.length > 0 ? (
        <div>
          <CommentList comment={comments} />
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet!</b>
      )}
    </div>
  );
};
