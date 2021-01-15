import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.scss';
import { typeComments } from '../../types';

const CommentList = ({ list }) => (
  <ul className="commentList">
    <h3>
      Comments
    </h3>

    <li className="commentList__comment">
      {list.map(comm => (
        <Comment comment={comm} key={comm.id} />
      ))}
    </li>
  </ul>
);

CommentList.propTypes = { list: typeComments.isRequired };

export default CommentList;
