import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <section>
    {comments.map(item => <Comment key={item.id} {...item} />)}
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.objectOf(PropTypes.string).isRequired,
};
