import React from 'react';
import { CommentList } from '../CommentList/commentList';
import { UserInfo } from '../UserInfo/userInfo';
import { Post } from '../types/Post';
import './postInfo.scss';

type Props2 = {
  posts2: Post;
};
export const PostInfo: React.FC<Props2> = ({ posts2 }) => {
  const {
    title, body, user, comments,
  } = posts2;

  return (
    <>
      <div className="pageStyle">
        <div className="elemStyle">
          <strong>About: </strong>
          {title}
        </div>
        <div className="elemStyle">
          <strong>Information: </strong>
          {body}
        </div>
        <div>{user && <UserInfo user={user} />}</div>
        <div>{comments && <CommentList comments={comments} />}</div>
      </div>
    </>
  );
};
