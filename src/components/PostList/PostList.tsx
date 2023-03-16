import React from 'react';

import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => {
      const {
        id,
        title,
        body,
        user,
        comments,
      } = post;

      return (
        <li className="PostInfo" key={id}>
          <PostInfo
            title={title}
            body={body}
            user={user}
            comments={comments}
          />
        </li>
      );
    })}
  </ul>
);
