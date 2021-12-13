import React from 'react';
import { PreparedPost } from '../../typedefs/PreparedPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import '../PostList/PostList.scss';

interface Props {
  singlePost: Omit<PreparedPost, 'userId' | 'id'>
}

export const PostInfo: React.FC<Props> = ({ singlePost }) => {
  const {
    title,
    body,
    user,
    comments,
  } = singlePost;

  return (
    <li className="post-list__list-item">
      <h2 className="post-list__list-item-title">
        {title}
      </h2>
      <p className="post-list__list-item-text">
        {body}
      </p>

      {user && <UserInfo userInfo={user} />}
      <CommentList postComments={comments} />
    </li>
  );
};
