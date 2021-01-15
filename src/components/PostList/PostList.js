import React from 'react';
import { TypeOfPostsList } from '../../types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = TypeOfPostsList.isRequired;
