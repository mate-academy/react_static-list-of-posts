import React from 'react';
import { CommentList } from '../CommentList/commentList';
import { UserInfo } from '../UserInfo/userInfo';
import { Post } from '../types/Post';
import './postInfo.scss';

type Props = {
  posts: Post;
};
export const PostInfo: React.FC<Props> = ({ posts }) => {
  const {
    title, body, user, comments,
  } = posts;

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
        <div>{<CommentList comments={comments} />}</div>
      </div>
    </>
  );
};
