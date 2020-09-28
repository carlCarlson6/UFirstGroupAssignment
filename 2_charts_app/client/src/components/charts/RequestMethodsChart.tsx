import React, { Fragment, useEffect, useState } from 'react';
import { Distribution } from '../../models/Distributions';
import { Doughnut, ChartData } from "react-chartjs-2";
import { useContext } from 'react';
import EpaContext from '../../context/Epa/EpaContext';
import { randomColor } from '../../common/utils/randomColor';

const RequestMethodsChart: React.FC = (): JSX.Element => {
    const {data} = useContext(EpaContext);
    const [chartData, setChartData] = useState<ChartData<Chart.ChartData>>({});
    
    useEffect(() => {
        const methodsData = data as Distribution;
        setChartData({
            labels: methodsData.map(methodData => methodData.value),
            datasets: [{
                data: methodsData.map(methodData => methodData.count),
                backgroundColor: methodsData.map(methodsData => randomColor())
            }]
        })
    }, [])


    return (
        <Fragment>
            <Doughnut 
                data={chartData} 
                options={{aspectRatio: 1}}
            />
        </Fragment> 
    );
}
 
export default RequestMethodsChart;