import React from 'react';
import PropTypes from 'prop-types';
import { Comment, Header } from 'semantic-ui-react';
import CommentItem from './CommentItem';

const CommentList = ({ cmts }) => (
  <Comment.Group className="cmts">
    <Header as="h3" dividing content="Comments" />
    {cmts.map(cmt => <CommentItem key={cmt.id} {...cmt} />)}
  </Comment.Group>
);

CommentList.propTypes = {
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
