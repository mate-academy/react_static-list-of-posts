import React from 'react';
import PostInfo from './PostInfo';

import { Post } from '../Types';

type Props = {
  posts: Post[],
};

const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="app__list post">
    {posts.map(post => (
      <li className="post__item" key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

export default PostList;
