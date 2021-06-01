import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import PropTypes from 'prop-types';
import { Comment } from '../comment';
import { CommentType } from '../comment/CommentType';
import './CommentSection.css';

export const CommentSection = ({ commentList }) => (
  <TreeView
    className="tree"
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpandIcon={<ChevronRightIcon />}
  >
    <TreeItem
      nodeId="1"
      label="Comment section"
    >
      {commentList.map(comment => (
        <Comment
          className="comment"
          key={`${comment.id}`}
          {...comment}
        />
      ))}
    </TreeItem>
  </TreeView>
);

CommentSection.propTypes = {
  commentList: PropTypes.arrayOf(CommentType),
};

CommentSection.defaultProps = {
  commentList: [],
};
