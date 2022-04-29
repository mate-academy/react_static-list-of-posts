import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <div data-cy="post-info" className="post" key={post.id}>
          <PostInfo {...post} />
        </div>
      ))}
    </>
  );
};
