import React from 'react';
import { Post } from '../Post/Post';
import { ShapePost } from '../Shapes';

const PostList = ({ preparedPosts }) => (
  <ul className="container">
    { preparedPosts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = ShapePost.isRequired;

export default PostList;
