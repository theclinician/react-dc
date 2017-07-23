import React from 'react';
import { withProps } from '../utils';

const { func, number, oneOfType } = React.PropTypes;

export default withProps({
  boxPadding: number,
  boxWidth: oneOfType([func, number]),
  outerPadding: number,
  tickFormat: func,
});