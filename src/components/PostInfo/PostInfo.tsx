import React from 'react';
import { Post } from '../../Types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    userLink,
    commentLink,
  } = post;

  return (
    <article className="list__post-info">
      <div className="list__post-top">
        <h2 className="list__post-title">
          <i>{title}</i>
        </h2>
        <p>{body}</p>
      </div>

      <div className="list__post-bottom">
        {userLink && <UserInfo user={userLink} />}

        <CommentList comments={commentLink} />
      </div>
    </article>
  );
};
