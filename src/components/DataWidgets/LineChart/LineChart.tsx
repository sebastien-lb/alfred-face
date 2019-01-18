import * as React from 'react';

import * as chartjs from "chart.js";
import { ChartData, Line } from 'react-chartjs-2';

interface ILineChartProps {
    data: number[];
    labels: string[];
    title: string;
    isTime?: boolean;
}


export class LineChart extends React.Component<ILineChartProps, {}>  {


    public render() {
        
        const chardata: ChartData<chartjs.ChartData> = {
            labels: this.props.labels,
            datasets: [
                {
                    label: this.props.title,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.data
                }
            ],
        };
        return (
            <div>
                <Line height={200} width={500} data={chardata} 
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                type: 'time',
                                time: {
                                    unit: 'month'
                                }
                            }]
                        }
                    }}/>
            </div>
        );
    }
}
