import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommetList';

function Click(button) {
  button.target.nextSibling.classList.toggle('active');
}

export const Post = ({ title, body, comments, user }) => (
  <div>
    <div className="post_text">
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        <User {...user} />
      </div>
    </div>
    <input
      className="button"
      type="button"
      value={`Comments ${comments.length}`}
      onClick={Click}
    />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  user: PropTypes.shape().isRequired,
};
