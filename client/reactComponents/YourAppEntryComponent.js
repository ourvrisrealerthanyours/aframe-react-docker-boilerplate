import React from 'react';

class YourAppEntryComponent extends React.Component {
  render() {
    return (
      <a-scene>
        <a-assets>
        </a-assets>
        <a-sky color='blue' />
        <a-box position='0 0 -5' color='red'/>
      </a-scene>
    );
  }
}

module.exports = YourAppEntryComponent;
