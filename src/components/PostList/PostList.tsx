import React from 'react';
import './PostList.scss';
import Post from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <ul className="post-list">
      {posts.map(post => (
        <li className="post-list__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </>
);

export default PostList;
