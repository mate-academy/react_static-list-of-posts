import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({
  post,
}) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} key={user.id} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {post.comments.length > 0
        ? (<CommentList comments={comments} />)
        : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>
  );
};
