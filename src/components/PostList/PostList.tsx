import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="list">
      {posts.map(post => (
        <div className="list__item">
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
