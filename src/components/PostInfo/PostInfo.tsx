import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
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
            {' Posted by '}

            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length
        ? (<CommentList comments={comments} />)
        : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>
  );
};
