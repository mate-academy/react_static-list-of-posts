import React from 'react';
import { ShapePostList } from '../Shapes';
import PostItem from '../PostItem/PostItem';
import './PostsList.css';

const PostsList = props => (
  <ul className="posts">
    {
      props.list.map(post => (
        <PostItem key={post.id} {...post} />
      ))
    }
  </ul>
);

PostsList.propTypes = ShapePostList.isRequired;
export default PostsList;
