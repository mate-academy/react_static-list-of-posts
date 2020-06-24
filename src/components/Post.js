import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

export default function Post(props) {
  return (
    <>
      <h2>
        {'Title: '}
        {props.post.title}
      </h2>
      <h4>
        {'Body: '}
        {props.post.body}
      </h4>
      <h4>
        {<User user={props.post.user} />}
      </h4>
      <h4>
        {<CommentList comments={props.post.commentsArray} />}
      </h4>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.bool,
    user: PropTypes.object,
    commentsArray: PropTypes.object,
  }).isRequired,
};
