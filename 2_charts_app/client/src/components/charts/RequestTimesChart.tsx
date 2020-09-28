import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Distribution, TimeDistribution } from '../../models/Distributions';
import { Line, ChartData } from "react-chartjs-2";
import EpaContext from '../../context/Epa/EpaContext';

const RequestTimesChart: React.FC = (): JSX.Element => {
    const [chartData, setChartData] = useState<ChartData<Chart.ChartData>>({})
    const {data} = useContext(EpaContext);
    
    useEffect(() => {
        const timesData = data.sort((dataElementA, dataElementB) => dataElementA.value-dataElementB.value) as TimeDistribution;
        setChartData({
            labels: timesData.map(timeData => `d${timeData.time.day}-${timeData.time.hour}h:${timeData.time.minute}m`),
            datasets: [{
                data: timesData.map(timeData => timeData.count),
                backgroundColor: '#e384e3',
                borderColor: '#8a0ff2',
                borderWidth: 1,
                radius: 2,
                pointStyle: 'line',
                
            }]
        });
    }, [])

    return (
        <Fragment>
            <Line 
                data={chartData} 
                options={{
                    legend: {display: false},
                    scales: {
                        yAxes: [{scaleLabel: {labelString: 'number of request', display:true, fontColor: '#2b2528', fontSize: 15}}],
                        xAxes: [{scaleLabel: {labelString: 'time', display:true, fontColor: '#2b2528', fontSize: 15}}]
                    },
                }}
            />
        </Fragment>
        
    );
}
 
export default RequestTimesChart;