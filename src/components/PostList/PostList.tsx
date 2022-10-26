import React from 'react';
import './PostList.scss';
import { UserInfo } from '../UserInfo/UserInfo';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import { CommentList } from '../CommentList/CommentList';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(({
      title, body, userId, user, comments,
    }) => (
      <li key={userId}>
        <PostInfo
          title={title}
          body={body}
        />
        <UserInfo user={user} />
        <div className="title">Comments:</div>
        <CommentList comments={comments} />
      </li>
    ))}
  </ul>
);
