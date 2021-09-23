import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';
import './ComponentsStyles.scss';

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
    <div>
      <div className="postTitleStyle">{ title }</div>
      <div className="postBodyStyle">{ body }</div>
      { user && (<UserInfo user={user} />) }
      { comments && (<CommentList comments={comments} />) }
    </div>
  );
};
