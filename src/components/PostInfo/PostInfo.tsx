import React from 'react';

// import { PostInfoProps } from '../../types';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Data } from '../../types';

import './PostInfo.scss';

type Props = {
  post: Data
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, comments, user,
  } = post;

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          Posted by&nbsp;

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length === 0
          ? (
            <>
              <hr />

              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
          : <CommentList comments={comments || []} />
      }
    </>
  );
};
