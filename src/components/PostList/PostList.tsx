import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="posts__body" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
