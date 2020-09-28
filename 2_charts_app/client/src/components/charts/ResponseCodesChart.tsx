import { ChartData, Bar} from "react-chartjs-2";
import React, { Fragment } from 'react';
import EpaContext from '../../context/Epa/EpaContext';
import { Distribution } from "../../models/Distributions";
import { randomColor } from "../../common/utils/randomColor";


const ResponseCodesChart: React.FC = () => {
    const [chartData, setChartData] = React.useState<ChartData<Chart.ChartData>>({})
    const {data} = React.useContext(EpaContext);

    React.useEffect(() => {
        const codesData = data.sort((dataElementA, dataElementB) => dataElementA.value-dataElementB.value) as Distribution;
        const colors = codesData.map(() => randomColor())
        setChartData({
            datasets: [
                {
                    data: codesData.map(codeData => codeData.count),
                    backgroundColor: colors,
                    type: 'bar'
                },
                {
                    data: codesData.map(codeData => codeData.count),
                    borderColor: colors,
                    borderWidth: 5,
                    borderJoinStyle: 'bevel',
                    type: 'line',
                    fill: false
                }
            ],
            labels: codesData.map(codeData => codeData.value.toString())
        })
    }, [])


    return (
        <Fragment>
            <Bar 
                data={chartData} 
                options = {{
                    legend: {display:false },
                    elements: {rectangle: {borderWidth: 2}},
                    scales: {
                        yAxes: [{scaleLabel: {labelString: 'number of responses', display:true, fontColor: '#2b2528', fontSize: 15}}],
                        xAxes: [{scaleLabel: {labelString: 'response codes', display:true, fontColor: '#2b2528', fontSize: 15}}]
                    }
                }}    
            />
        </Fragment> 
    );
}
 
export default ResponseCodesChart;