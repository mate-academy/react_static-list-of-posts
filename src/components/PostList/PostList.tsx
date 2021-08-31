import React from 'react';
import { Post } from '../../types/Post/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

interface Props {
  content: Post[],
}

export const PostList: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <div className="posts-flex-container">
      {content.map((postItem: Post) => (
        <div className="post-item" key={postItem.id}>
          <PostInfo postItem={postItem} />
        </div>
      ))}
    </div>
  );
};
