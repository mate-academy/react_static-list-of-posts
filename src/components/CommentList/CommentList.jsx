import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <List className="list-comments">
    <div>Comments</div>
    {comments.map(coment => (
      <ListItem key={coment.id}>
        <Comment coment={coment} />
      </ListItem>
    )) }
  </List>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
