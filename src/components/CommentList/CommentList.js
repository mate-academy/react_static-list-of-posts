import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(c => (
      <section className="post__comment" key={c.id}>
        <Comment {...c} />
      </section>
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
