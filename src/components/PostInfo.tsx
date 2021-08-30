import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { Post } from '../Types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <div className="card-body text-dark">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          {body}
        </p>

        { user && (
          <p className="card-text">
            <small className="text-muted">
              <UserInfo user={user} />
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
};
