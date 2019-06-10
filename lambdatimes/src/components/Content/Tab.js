import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let changeClassName = '';
  if (props.tab === props.selectedTab) {
    changeClassName ='tab active-tab';
  } else {
     changeClassName = 'tab';
  }

  return (
    <div
      className={changeClassName}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
    tab: PropTypes.string,
}

export default Tab;

// Make sure you include PropTypes on your props.


 /* Replace this dummy click handler function with your selectTabHandler function from props 
you'll need to pass the `tab` in as an argument to this handler. */


 /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/