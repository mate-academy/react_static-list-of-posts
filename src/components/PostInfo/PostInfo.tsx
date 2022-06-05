import React from 'react';
import { GeneralPosts } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  generalPost: GeneralPosts;
};

export const PostInfo: React.FC<Props> = ({ generalPost }) => {
  const {
    title,
    body,
    user,
    comments,
  } = generalPost;

  return (
    <li className="postsListItem" data-cy="post-info">
      <h3 className="postsListItemTitle" data-cy="post-title">
        {title}
      </h3>

      <p className="postsListItemBody" data-cy="post-body">
        {body}
      </p>

      {user && (
        <div className="postsListItemUserInfo">
          <UserInfo mainUser={user} />
        </div>
      )}

      <div className="postsListItemComments">
        <CommentList commentList={comments} />
      </div>
    </li>
  );
};
