// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
import { Chart } from 'react-chartjs-2';

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.font = chart.config.data.text.fontSize + "em Verdana";
    ctx.textBaseline = "middle";
    ctx.fillStyle = chart.config.data.text.color;

    var text = chart.config.data.text.content,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.85;

    ctx.fillText(text, textX, textY);
  }
});