import React from 'react';

import { FormattedMessage } from 'react-intl';


class H2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	
    return (
      <h2>
        {this.props.H2Prop}
      </h2>
    );
  }
}

export default H2;
