import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import CommentInfo from '../CommentInfo/CommentInfo';
import { PreparedPost } from '../../types/PreparedPost';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    writtenComments,
  } = post;

  return (
    <div className="post">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      {user ? (
        <UserInfo user={user} />
      ) : (
        <p>Someone</p>
      )}
      <CommentInfo comments={writtenComments} />
    </div>
  );
};

export default PostInfo;
