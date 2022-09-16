import React from 'react';

import { PostInfo } from '../PostInfo';

import { Post } from '../../type/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <div className="PostList">
        {
          posts.map(post => <PostInfo key={post.id} post={post} />)
        }
      </div>
    </>
  );
};
