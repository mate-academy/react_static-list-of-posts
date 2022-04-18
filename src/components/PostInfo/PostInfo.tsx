import React from 'react';
import './PostInfo.scss';
import CommentList from '../CommentList/CommentList';
import { Post } from '../../types/Post';
import UserInfo from '../UserInfo/UserInfo';

const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  commentsList,
}) => {
  return (
    <div className="post">
      <h2 className="postTitle" data-cy="post-title">
        {title}
      </h2>
      <p className="postBody" data-cy="post-body">
        {body}
      </p>
      <UserInfo {...user} />
      <CommentList listOfComments={commentsList} />
    </div>
  );
};

export default PostInfo;
