import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  content: Post[],
}

export const PostList: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <div>
      {content.map((postItem: Post) => (
        <div key={postItem.id}>
          <PostInfo postItem={postItem} />
        </div>
      ))}
    </div>
  );
};
