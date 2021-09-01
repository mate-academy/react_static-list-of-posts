import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../types/PreparedPost';
import './PostInfo.scss';

type Props = {
  postData: PreparedPost;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { postData } = props;
  const {
    title, body, user, comments,
  } = postData;

  return (
    <div className="postInfo">
      <h2 className="postInfo__heading">
        {'Post title: '}
        {title}
      </h2>
      <p className="postInfo__body">{body}</p>

      {(user
      ) && (
        <UserInfo
          name={user.name}
          username={user.username}
          email={user.email}
        />
      )}

      <CommentList commentsDataList={comments} />
    </div>
  );
};
