import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul className="PostList">
    {posts.map((post) => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

// prepare posts by adding a user and comments to each post (each comment has a postId);
// split the App into components based on given CSS blocks;
// styles from App.scss should be moved to separate files, as well. E.g.: PostList.scss;
// List components should take an array of corresponding objects and render one Info component per object;
// Info components should take one object and render its data.
