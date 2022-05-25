import React from 'react';
import { DataList } from '../../types/DataList';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: DataList[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <main className="main">
      <div className="posts" data-cy="post-info">
        {posts.map(post => (
          <div key={post.id} className="posts__item post">
            <PostInfo post={post} />
          </div>
        ))}
      </div>
    </main>
  );
};
