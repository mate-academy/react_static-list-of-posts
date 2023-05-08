import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    comments,
    user,
    title,
    body,
  } = post;

  const printedComents = comments.length > 0
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {printedComents}
    </div>
  );
};
