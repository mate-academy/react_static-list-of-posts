import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';

function PostList({ list }) {
  return (
    <div key="PostList" className="post list">
      {list.map(post => (
        <Post
          key={post.title}
          id={post.id}
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default PostList;

PostList.propTypes = PropTypes.arrayOf({}).isRequired;
