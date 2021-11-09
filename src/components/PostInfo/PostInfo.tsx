import React from 'react';
import { PreparedPosts } from '../../type/type';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

interface Props {
  postInfo: PreparedPosts;
}

export const PostInfo: React.FC<Props> = ({ postInfo }) => {
  const {
    title, body, user, comments, id,
  } = postInfo;

  return (
    <div className="post-info">
      <h3>
        {`Post #${id}: ${title}`}
      </h3>
      <p>{body}</p>
      {user && <UserInfo userInfo={user} />}
      {comments.length && <CommentList commentList={comments} />}
    </div>
  );
};
