import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function CommentList({ comments }) {
  return (
    <table>
      <thead>
        <td>Title</td>
        <td>Name</td>
        <td>Email</td>
        <td>Status</td>
      </thead>
      <tbody>
        {comments.map(item => (
          <Comment comment={item} key={item.id} />))}
      </tbody>
    </table>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf.isRequired,
};
