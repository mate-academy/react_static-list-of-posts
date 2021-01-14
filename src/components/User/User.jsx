import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { UserShape } from '../../Types';

const User = ({ users, id }) => (
  <>
    <Container>
      <Row>
        <Col xs={6} md={4} className="author">
          Author:
          {' '}
          {users.find(user => user.id === id).name}
        </Col>
        <Col xs={6} md={4} className="email">
          E-mail:
          {' '}
          {users.find(user => user.id === id).email}
        </Col>
        <Col xs={6} md={4}>
          City:
          {' '}
          {users.find(user => user.id === id).address.city}
        </Col>
      </Row>
    </Container>
  </>
);

User.propTypes = {
  users: PropTypes.objectOf(UserShape).isRequired,
  id: PropTypes.number.isRequired,
};

export default User;
