import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataPoints = [];
    for (let i = 0; i < 12; i++) {
        let date = new Date();
        date.setMonth(i);
        const month = date.toLocaleString('default', {month: 'short'});
        chartDataPoints.push({label: month, value: 0});
    }

    props.expenses.forEach(expense => {
        const monthIndex = expense.date.getMonth();
        chartDataPoints[monthIndex].value += expense.amount;
    });

    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;