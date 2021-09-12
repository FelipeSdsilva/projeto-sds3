import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';
type ChartData ={
    labels: String[];
    series: number[];
}
const DonutChart = () => {
    
    let chartData : ChartData = { labels: [], series: []}

    axios.get(BASE_URL+'/sale/amount-by-seller')
        .then(response =>{
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sallerName);
            const mySeries = data.map(x => x.sum);

            chartData = { labels: myLabels, series: mySeries}
            console.log(chartData);
        })
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        <Chart 
            options={{...options, }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
  }
  
  export default DonutChart;