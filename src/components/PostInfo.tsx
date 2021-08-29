import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { Post } from '../Types/Post';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="card-body text-dark">
      <h5 className="card-title">{title}</h5>

      <p className="card-text">
        {body}
      </p>

      { user && (
        <p className="card-text">
          <small className="text-muted">
            <UserInfo {...user} />
          </small>
        </p>
      )}
    </div>

    { comments && (
      <div className="card-footer">
        <CommentList comments={comments} />
      </div>
    )}
  </>
);
