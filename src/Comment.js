import PropTypes from 'prop-types';
import React from 'react';

const Comment = ({ comment: { name, body, email, id } }) => (
  <>
    <dt>
      {`Comment ${id}: ${body}`}
    </dt>
    <dd style={{ marginBottom: '20px', color: 'green' }}>
      {`Author: ${name}`}
      <br />
      {`Email: ${email}`}
    </dd>
  </>
);

Comment.propTypes
  = { comment: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Comment;
