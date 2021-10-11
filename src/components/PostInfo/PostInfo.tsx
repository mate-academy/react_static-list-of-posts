import React from 'react';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <h3 className="postTitle">{title}</h3>
      <p className="postInfo">
        <span className="postByUser">
          <b>Posted by: </b>
          {user?.name}
        </span>
        <span className="postUserEmail">{user?.email}</span>
      </p>
      <p className="postText">{body}</p>
      <CommentList comments={comments} />
    </div>
  );
};
