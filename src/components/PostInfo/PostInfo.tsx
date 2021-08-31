import React from 'react';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id, title, body, user, commentsLink,
  } = post;

  return (
    <div className="post-container">
      <div className="post" key={id}>
        <p className="post__title">{title}</p>
        <p className="post__body">{body}</p>
      </div>
      <>
        {user
          ? <UserInfo user={user} />
          : <p>Unknown User</p>}
        <CommentList comments={commentsLink} />
      </>
    </div>
  );
};
