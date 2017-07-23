import React from 'react';
import dc from 'dc';
import BaseChart from './base-chart';
import numberMixin from '../mixins/number-mixin';

@numberMixin
export default class NumberDisplay extends BaseChart {
  static displayName = 'NumberDisplay'

  componentDidMount() {
    this.chart = dc.numberDisplay(this.chart)
    this.configure()
    this.chart.render()
  }
}
