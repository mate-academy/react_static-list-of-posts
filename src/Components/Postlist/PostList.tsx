import React from 'react';
import { Post } from '../../api/Types/Interfaces';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => (
  <div className="container">
    <ul className="postList">
      {props.posts.map(post => (
        <li key={post.id} className="postList__item">
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
