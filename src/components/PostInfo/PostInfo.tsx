import React from 'react';
import { Post } from '../../typedefs';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../Comments/CommentList/CommentList';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title, body, user, comments,
  } = post;

  return (
    <>
      {
        user && <UserInfo user={user} />
      }

      <h2 className="posts__item-title">{title}</h2>
      <p className="posts__item-body">{body}</p>

      {
        comments && <CommentList comments={comments} />
      }
    </>
  );
};
