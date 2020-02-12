import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const Post = ({ title, body, comments, user }) => (
  <>
    <p>{}</p>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <p>Comments</p>
    <ul className="comments">
      <CommentList data={comments} />
    </ul>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
