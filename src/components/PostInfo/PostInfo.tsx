import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({
  post,
}) => {
  const {
    comments,
    title,
    body,
    user,
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

      {post.comments.length > 0
        ? (<CommentList comments={comments} />)
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
