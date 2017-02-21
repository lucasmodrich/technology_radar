import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

function Link({ pageName, children, navigate, className}) {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(pageName);
  };

  return (
    <a href={`/${pageName}.html`} onClick={handleClick} {...{ className }}>
      {children}
    </a>
  );
}

export default connect(
  undefined,
  actions
)(Link);
