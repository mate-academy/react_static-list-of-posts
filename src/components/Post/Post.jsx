import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommetList';

export const Post = ({ title, body, comments, user }) => (
  <>
    <div className="post_text">
      <h2>{title}</h2>
      <p>{body}</p>
      <div><User {...user} /></div>
    </div>
    <input
      className="button"
      type="button"
      value={`Comments ${comments.length}`}
    />
    <CommentList comments={comments} />
  </>
);

Post.prototype = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};
