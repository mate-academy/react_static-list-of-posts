import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { city, street } = address;

  return (
    <List className="list-user">
      Information about the author:
      <ListItem>
        {`Name: ${name}`}
      </ListItem>
      <ListItem>
        {`Email: ${email}`}
      </ListItem>
      <ListItem>
        <List>
          Address:
          <ListItem>
            {`City ${city}`}
          </ListItem>
          <ListItem>
            {`Street ${street}`}
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
