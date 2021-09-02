import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="container">
      <ul className="list-group">
        {
          posts.map(post => (
            <li key={post.id} className="list-group-item">
              <PostInfo post={post} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
