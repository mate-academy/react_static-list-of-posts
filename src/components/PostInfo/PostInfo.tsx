import React from 'react';

import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo:React.FC<Props> = (props) => {
  const {
    post,
  } = props;

  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <div className="postTitle" data-cy="post-title">
        {title}
      </div>

      <div className="postBody" data-cy="post-body">
        {body}
      </div>

      <div className="userInfo">
        <div className="userTitle">Autor: </div>
        {user && (
          <UserInfo
            name={user.name}
            email={user.email}
          />
        )}
      </div>

      <div className="commentTitle">Comments:</div>
      <ul className="commentsList" data-cy="comments-list">
        {comments && comments.map((comment: Comment) => (
          <li key={comment.id} className="commentsItem">
            <CommentInfo
              comment={comment}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
