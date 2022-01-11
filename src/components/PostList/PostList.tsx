import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../Types/Types';

type Props = {
  posts: PreparedPost[];
};

export const PostList:React.FC<Props> = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>
          <PostInfo onePost={post} />
        </li>
      ))}
    </ul>
  );
};
