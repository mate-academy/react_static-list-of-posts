import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { getUser, filterComments } from './PostData';

export const Post = (props) => {
  const { title, body, userId, id } = props;
  const user = getUser(userId);

  return (
    <>
      <Row>
        {id}
        <Col sm={6} md={4}>
          <User
            name={user.name}
            email={user.email}
            address={user.address}
          />
        </Col>
        <Col>
          <h4>{title}</h4>
          <p>{body}</p>
        </Col>
      </Row>
      <Row>
        <CommentList
          comments={filterComments(id)}
        />
      </Row>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
