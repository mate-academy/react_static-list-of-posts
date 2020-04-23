import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ title, body, author, comments }) => (
  <>
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
      <User {...author} />
    </article>
    <hr />
    {comments.length > 0
    && <CommentList commentList={comments} />}
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
