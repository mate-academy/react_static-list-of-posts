import React from 'react';
import { NewPosts } from '../../types/Types';
import { CommentInfo } from '../CommentInfo/index';
import { UserInfo } from '../UserInfo/index';
import './PostInfo.scss';

type Props = {
  newPosts: NewPosts[],
};

export const PostInfo: React.FC<Props> = ({ newPosts }) => (
  <div className="PostInfo">
    <ul className="PostInfo--List">
      {newPosts.map(post => (
        <li className="PostInfo--List_Item">
          <h2 className="PostInfo--Title">{`${post.title}`}</h2>
          <div className="PostInfo--Body">
            {`${post.body}`}
          </div>
          <UserInfo users={post.user || null} />
          <CommentInfo comments={post.comment || null} />
        </li>
      ))}
    </ul>
  </div>
);
