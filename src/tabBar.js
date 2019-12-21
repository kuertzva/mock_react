import React from 'react';
import './static/tabBar.scss'

function TabBar(props) {

  function makeTabs() {
    var tabArr = [];
    const tabNames = props.tabNames;
    for (var i = 1; i <= tabNames.length; i++) {
      var pClass = '';
      if (i === 1) {
        pClass += 'first '
      }
      if (i === props.step) {
        pClass += 'active-tab';
      }
      var tab = (
        <p
          className={pClass}
          key={i - 1}
        >
          {tabNames[i - 1]}
        </p>
      )
      tabArr.push(tab);
    }
    return tabArr;
  }

  return (
    <div id='tabBar'>
      {makeTabs()}
    </div>
  )
}

export default TabBar;
