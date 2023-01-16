import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { TotalInfo } from '../../types/TotalInfo';

import './PostInfo.scss';

type Props = {
  totalData: TotalInfo
};

export const PostInfo: React.FC<Props> = ({ totalData }) => {
  const {
    title,
    body,
    arrayOfComments,
    user,
  } = totalData;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user !== null ? (
            <UserInfo currentUser={user} />
          ) : (
            null
          )}

        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <>
        {arrayOfComments.length === 0 ? (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        ) : (
          <CommentList comments={arrayOfComments} />
        )}
      </>

    </div>
  );
};
