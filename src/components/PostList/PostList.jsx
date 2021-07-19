import React from 'react';
import './post-list.scss';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <article className="article">
      {posts.map(post => (
        <div key={post.id} className="article__post post">
          <Post
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </div>
      ))}
    </article>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
