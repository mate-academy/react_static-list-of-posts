import React from 'react';
import PropTypes from 'prop-types';
import comments from '../api/comments';
import Post from './Post';

function PostList({ supPosts }) {
  return (
    <ol>
      {supPosts.map((post) => {
        const elem = post;

        elem.comments = comments.filter(comment => post.id === comment.postId);

        return (
          <li key={post.id}>
            <Post
              tittle={post.title}
              body={post.body}
              user={post.user}
              comments={post.comments}
            />
          </li>
        );
      })}
    </ol>
  );
}

PostList.propTypes = {
  supPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
