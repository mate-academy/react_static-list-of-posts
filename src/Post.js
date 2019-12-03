import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post: { id, user, title, body, commentList } }) => (
  <>
    <dt style={{ fontWeight: 'bold' }}>
      {`Post ${id}: ${title}`}
    </dt>
    <dd style={{ marginBottom: '20px' }}>
      <span style={{ color: 'blue' }}>
        {body}
      </span>
      <br />
      <span style={{ color: 'green' }}>
        <User user={user} />
      </span>
      <CommentList commentList={commentList} />
    </dd>
  </>
);

Post.propTypes
  = { post: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Post;
