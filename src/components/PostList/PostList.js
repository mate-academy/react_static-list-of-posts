import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

function PostList(props) {
  return (
    props.postList.map(
      ({ id, title, user, body, comments }) => (
        <Post
          key={id}
          title={title}
          body={body}
          comments={comments}
          user={user}
        />
      )
    )
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
