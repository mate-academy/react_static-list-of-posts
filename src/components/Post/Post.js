import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { User } from '../User/User';

import { CommentList } from '../CommentList/CommentList';
import { PostShape } from './PostShape';

export const Post = (props) => {
  const { title, body, id, postUser, postComments } = props;

  return (
    <>
      <Row>
        {id}
        <Col sm={6} md={4}>
          <User
            name={postUser.name}
            email={postUser.email}
            address={postUser.address}
          />
        </Col>
        <Col>
          <h4>{title}</h4>
          <p>{body}</p>
        </Col>
      </Row>
      <Row>
        <CommentList
          comments={postComments}
        />
      </Row>
    </>
  );
};

Post.propTypes = PostShape.isRequired;
