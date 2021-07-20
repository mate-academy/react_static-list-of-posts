import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';

export const Comment = ({ coment }) => {
  const { name, email, body } = coment;

  return (
    <List>
      <ListItem>
        <List>
          {name}
          <ListItem>
            {body}
          </ListItem>
          {email}
        </List>
      </ListItem>
    </List>
  );
};

Comment.propTypes = {
  coment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
