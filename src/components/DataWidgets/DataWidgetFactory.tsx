import * as React from 'react';

import { LineChart } from './LineChart/LineChart';

import { DataType, IDataPoint, IDataSource } from '../../interfaces';


interface IDataWidgetFactoryProps {
    data: any;
    dataSource: IDataSource;
}


export class DataWidgetFactory extends React.Component<IDataWidgetFactoryProps, {}>  {


    public render() {

        const dataType: DataType = this.props.dataSource.data_type;
        console.log("render data widget", dataType, this.props.dataSource, this.props.data);
        switch(dataType) {

            case 'number':
                if (this.props.data && this.props.data.length) {
                    return <LineChart title="Title"
                            data={this.props.data.map((a: IDataPoint) => a.value)}
                            labels={this.props.data.map((a: IDataPoint) => a.timestamp)}
                            />;
                }
            case 'boolean':
                if (this.props.data && this.props.data.length) {

                    // add missing point for creneau
                    const tableau = this.props.data.map((a: IDataPoint, index: number): IDataPoint[] => {
                        if (index < this.props.data.length && this.props.data[index+1] !== this.props.data[index]) {
                            return [ 
                                this.props.data[index],
                                {value: !this.props.data[index].value, timestamp: this.props.data[index].timestamp},
                            ];
                        } 
                        return this.props.data[index];
                    }).reduce((a: IDataPoint[], b: IDataPoint[]): IDataPoint[] => 
                        [...a, ...b], []
                    );

                    return <LineChart title="Title"
                        data={tableau.map((a: IDataPoint) => a.value)}
                        labels={tableau.map((a: IDataPoint) => a.timestamp)}
                        boolean={true}
                        />;
                }
                return <LineChart title="Title" data={[12,23, 3]} labels={["oui","non", "yes"]}/>;

            case 'color':
                if (Array.isArray(this.props.data)) {
                    return <ul>{
                        (this.props.data || []).map((a: IDataPoint) =>
                            <li key={`${a.timestamp}`}><span>Color: {String(a.value)}</span></li>
                        )
                    }</ul>

                }

                return null;

            default:
                return <div> DataViz not implemented yet </div>;
        };
    }
}
