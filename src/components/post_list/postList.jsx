import React from 'react';
import PropTypes from 'prop-types';
import Post from '../post/post'
import '../post_list/postList.css';

function PostList({posts}) {
  return (
    <div className="posts">
      <ul className="posts__list">
        {
          posts.map(post => (
            <li className="posts__item" key={post.id}>
              <Post {...post} />
            </li>
          ))
        }
      </ul>
    </div>
  )
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.object).isRequired,
    comment: PropTypes.arrayOf(PropTypes.object).isRequired,
  })).isRequired,
};

export default PostList;

