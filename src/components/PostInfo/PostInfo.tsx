import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../../types/Post';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

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

  const commentSection = comments.length
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && <UserInfo user={user} /> }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      <hr />
      {commentSection}
    </div>
  );
};
