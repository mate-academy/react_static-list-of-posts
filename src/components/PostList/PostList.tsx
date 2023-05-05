import React from 'react';

import { PostInfo } from '../PostInfo/PostInfo';

import { Post } from '../../types/Post';

interface PostProps {
  posts: Post[];
}

export const PostList: React.FC<PostProps> = ({ posts }) => {
  return (

    <div className="PostList">

      {posts.map((post) => (<PostInfo post={post} key={post.id} />))}

    </div>

  );
};
