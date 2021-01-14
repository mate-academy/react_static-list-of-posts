import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { UserShape } from '../../Types';

const User = ({ email, address, name }) => (
  <>
    <Container>
      <Row>
        <Col xs={6} md={4} className="author">
          Author:
          {' '}
          {name}
        </Col>
        <Col xs={6} md={4} className="email">
          E-mail:
          {' '}
          {email}
        </Col>
        <Col xs={6} md={4}>
          City:
          {' '}
          {address.city}
        </Col>
      </Row>
    </Container>
  </>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.objectOf(UserShape).isRequired,
};

export default User;
