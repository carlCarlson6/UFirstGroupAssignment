import React, { Fragment } from 'react';
import { ChartData, HorizontalBar } from 'react-chartjs-2';
import { randomColor } from '../../common/utils/randomColor';
import EpaContext from '../../context/Epa/EpaContext';
import { Distribution } from '../../models/Distributions';


const ResponseSizesChart: React.FC = () => {
    const [chartData, setChartData] = React.useState<ChartData<Chart.ChartData>>({})
    const {data} = React.useContext(EpaContext);

    React.useEffect(() => {
        const sizesData = data.sort((dataElementA, dataElementB) => dataElementA.value-dataElementB.value) as Distribution;
        setChartData({
            labels: sizesData.map(sizesData => sizesData.value),
            datasets: [{
                data: sizesData.map(sizesData => sizesData.count),
                backgroundColor: sizesData.map(() => randomColor())
            }]
        })
    }, [])


    return (
        <Fragment>
            <HorizontalBar 
                data={chartData}
                options={{
                    legend: {display: false},
                    scales: {
                        yAxes: [{scaleLabel: {labelString: 'response sizes (B)', display:true, fontColor: '#2b2528', fontSize: 15}}],
                        xAxes: [{scaleLabel: {labelString: 'number of responses', display:true, fontColor: '#2b2528', fontSize: 15}}]
                    }
                }}              
            />
        </Fragment> 
    );
}
 
export default ResponseSizesChart;