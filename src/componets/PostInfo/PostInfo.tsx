import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import { CommentsList } from '../CommentsList/CommentsList';
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
      {
        user && (
          <h3>
            <UserInfo userInfo={user} />
          </h3>
        )
      }

      <p>
        {body}
      </p>
      <CommentsList comments={comments} />
    </li>
  );
};
