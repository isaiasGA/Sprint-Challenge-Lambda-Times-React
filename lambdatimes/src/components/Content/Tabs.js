import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              key={tab.id} 
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectTab}
              tab={tab}
            />
        )})}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tab: PropTypes.arrayOf(
    PropTypes.shape({
      selectTabHandler:PropTypes.func,
      selectedTab: PropTypes.array,
      tab: PropTypes.object
    })
  )
}

// Make sure to use PropTypes to validate your types!
export default Tabs;


/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/