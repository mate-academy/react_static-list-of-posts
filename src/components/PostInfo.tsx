import React from 'react';
import { CommentList } from './CommentList';
import { Post } from '../types/Post';

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
      <p className="postInform">
        <div className="postOfUser">
          {`Posted by : ${user?.name}`}
        </div>
        <div className="postEmail">
          {user?.email}
        </div>
      </p>
      <p className="postText">{body}</p>
      {comments && (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
