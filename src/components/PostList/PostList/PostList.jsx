import React from 'react';

import posts from '../../../api/posts';
import Post from '../Post/Post';
import './PostList.scss';

const PostList = () => (
  <section className="postList">
    {
      posts.map(post => <Post postInfo={post} key={post.id} />)
    }
  </section>
);

export default PostList;
