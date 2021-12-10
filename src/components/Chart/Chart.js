import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => <div className="chart">
    {props.dataPoints.map(dataPoint => <ChartBar
        key={dataPoint.label}
        value={dataPoint.value} maxValue={null}
        label={dataPoint.label}/>)}
</div>;

export default Chart;