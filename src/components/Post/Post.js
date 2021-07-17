import React from 'react';
import propTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';

export function Post({ title, body, user, comments }) {
  return (
    <>
      <h3>
        {`Post Title: ${title}`}
      </h3>
      <p>
        {body}
      </p>
      <User {...user} />
      <CommentList comments={comments} />
    </>
  );
}

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  user: propTypes.shape().isRequired,
  comments: propTypes.arrayOf().isRequired,
};
