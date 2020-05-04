import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comments from './Comments';

const Post = ({ title, body, user, comments }) => (
  <li className="post-card">
    <h2>{title}</h2>
    <p>{body}</p>
    <User user={user} />
    <p>
      <span className="comments__heading">Comments: </span>
      {comments.map(c => (
        <section className="post__comment" key={c.id}>
          <Comments {...c} />
        </section>
      ))}
    </p>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};

export default Post;
