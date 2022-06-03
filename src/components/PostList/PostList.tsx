import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostList.scss';
import { PropsPrepared } from '../../type';

export const PostList: React.FC <PropsPrepared> = (
  props,
) => (
  <div>
    {props.prepared.map(prep => (
      <li key={prep.id} className="list__item">
        {prep.user ? (
          <>
            <PostInfo post={prep} />
            <UserInfo user={prep.user} />
            <CommentList comms={prep.comments} />
          </>
        )
          : (
            <>
              <PostInfo post={prep} />
              <CommentList comms={prep.comments} />
            </>
          )}
      </li>
    ))}
  </div>
);
