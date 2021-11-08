import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title, user, body, comments,
  } = post;

  return (
    <li className="postInfo">
      <h2>
        {title}
      </h2>
      <h3>
        { user
          ? (<UserInfo userInfo={user} />)
          : null }
      </h3>

      <p>
        {body}
      </p>

      { comments.length
        ? comments.map(comment => (
          <CommentInfo commentInfo={comment} key={comment.id} />))
        : 'Be the first to comment!'}
    </li>
  );
};
