import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { TypePost } from '../../types';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="accordion-item" key={post.id}>
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {`Post: ${post.id} Title: ${post.title}`}
          </button>
        </h2>
        <Post post={post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(TypePost).isRequired,
};
