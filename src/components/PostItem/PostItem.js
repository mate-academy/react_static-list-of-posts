import React from 'react';
import { ShapePostItem } from '../Shapes';
import PostComments from '../PostComments/PostComments';
import './PostItem.css';

// eslint-disable-next-line max-len
const PostItem = ({ address, author, body, comments, email, id, title, userId }) => (
  <li className="post" key={id}>
    <h3 className="post__title">{title}</h3>
    <p className="post__text">{body}</p>
    <h4 className="post__author">{author}</h4>
    <a className="post__mail" href="mailto:ask@htmlbook.ru">{email}</a>
    <h4>Address</h4>
    <p>{address}</p>
    <PostComments comments={comments} />
  </li>
);

PostItem.propTypes = ShapePostItem.isRequired;
export default PostItem;
