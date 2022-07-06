import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <li className="postList__item">
          <PostInfo
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        </li>
      ))
    }
  </ul>
);
