import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => (
  <div>
  <span><b>The name of the author of the post: </b>{props.item.name} <br/></span>
  <span><b>The email of the author of the post: </b>{props.item.email}</span>
  </div>
  );

User.propTypes = {
  item: PropTypes.object.isRequired,
};

export default User;
