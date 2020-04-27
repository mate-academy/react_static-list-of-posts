import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ title, body, user, comments }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <section className="post__personalInfo">
      <User {...user} />
    </section>
    <section className="comments">
      <CommentList comments={comments} />
    </section>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default Post;
