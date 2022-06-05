import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../react-app-env';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(prep => (
      <div className="postCard" key={prep.id}>
        <PostInfo post={prep} />
      </div>
    ))}
  </>
);
