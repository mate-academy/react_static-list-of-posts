import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './Wrapper.css';

function Wrapper(props) {
  return (
    <ReactCSSTransitionGroup

    >
      <div className="all-context">
        <div className="wrapper">

            <div className="left top hole-staples">
              <div className="staple"><div>&nbsp;</div></div>
            </div>
            <div className="right top hole-staples">
              <div className="staple"><div>&nbsp;</div></div>
            </div>


          <div className="header">{props.header}</div>

          <div className="hole-piece">
            <div className="thick">&nbsp;</div>
          </div>

          <div className="user-info">{props.user}</div>

          <div className="hole-piece">
            <div className="fat">&nbsp;</div>
          </div>

          <div className="body">{props.body}</div>


            <div className="left bottom hole-staples">
              <div className="staple"><div></div></div>
            </div>
            <div
              className="right bottom hole-staples"
              onClick={props.onStapleClick}
            >
              <div
                className={
                  `staple${props.children === null
                    ? ''
                    : ' buttoned'
                  }`
                }>
                <div>&nbsp;</div>
              </div>
            </div>

        </div>
        <div className="children">
          {props.children}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Wrapper.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  children: PropTypes.element,
  onStapleClick: PropTypes.func
};

export default Wrapper;
