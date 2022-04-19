import React from 'react';
import { Post } from '../Types/Types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    <ul data-cy="post-info">
      {preparedPosts.map(item => (
        <li key={item.id}>
          <div>
            <PostInfo post={item} />
          </div>
        </li>
      ))}
    </ul>
  </>
);
