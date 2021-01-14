import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import User from '../User';
import CommentList from '../CommentList';
import { PostShape } from '../../Types';

// eslint-disable-next-line max-len
const Post = ({ postId, postTitle, postBody, idUser, dataUsers, commentsData }) => (
  <>
    <div className="post">
      <div>
        Post ID:
        {' '}
        <strong>
          {postId}
        </strong>
      </div>
      <span>
        Post name:
        {' '}
        {postTitle}
      </span>
      <User users={dataUsers} id={idUser} />
      <h3 className="text-center">{postTitle}</h3>
      <p className="postBody">{postBody}</p>
      <p><CommentList comments={commentsData} postId={postId} /></p>
    </div>
  </>
);

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  idUser: PropTypes.number.isRequired,
  dataUsers: PropTypes.objectOf(PostShape).isRequired,
  commentsData: PropTypes.objectOf(PostShape).isRequired,
};

export default Post;
