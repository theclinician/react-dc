import React from 'react';
import { withProps } from '../utils';

const { func, object } = React.PropTypes;

export default withProps({
  valueAccessor: func,
  formatNumber: func,
  group: object,
});