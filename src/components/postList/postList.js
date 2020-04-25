import React from 'react';
import PropTypes from 'prop-types';
import Post from './post/post';

function PostList({ posts, comments, users }) {
  return (
    <ul>
      {posts.map((post) => {
        const thisPostComments = comments.filter(comment => (
          comment.postId === post.id
        ));

        return (
          <li key={post.id}>
            <Post
              post={post}
              thisPostComments={thisPostComments}
              users={users}
            />
          </li>
        );
      })}

    </ul>

  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
