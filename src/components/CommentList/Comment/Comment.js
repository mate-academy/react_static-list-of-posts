import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import Wrapper from '../../Wrapper/Wrapper';
import User from '../../User/User';

function Comment(props) {
  const { name, email, body } = props;

  return (
    <Wrapper
      header={(<h3>{name}</h3>)}
      user={(<User email={email} />)}
      body={(<div className="body">{body}</div>)}
    />
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
