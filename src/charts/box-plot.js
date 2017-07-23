import React from 'react';
import dc from 'dc';
import d3 from 'd3';
import BaseChart from './base-chart';
import coordinateGridMixin from '../mixins/coordinate-grid-mixin';
import boxPlotMixin from '../mixins/box-plot-mixin';

@boxPlotMixin
@coordinateGridMixin
export default class BoxPlot extends BaseChart {
  static displayName = 'BoxPlot'
  static defaultProps = {
    x: d3.scale.ordinal(),
    xUnits: dc.units.ordinal,
  };

  componentDidMount() {
    this.chart = dc.boxPlot(this.chart)
    this.configure()
    this.chart.render()
  }
}