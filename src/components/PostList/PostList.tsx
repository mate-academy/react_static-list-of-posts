import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../react-app-env';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(prep => (
      <ul className="postCard" key={prep.id}>
        <PostInfo post={prep} />
      </ul>
    ))}
  </>
);
