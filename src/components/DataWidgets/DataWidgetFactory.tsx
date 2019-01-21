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

            case 'boolean':

                if (this.props.data && this.props.data.length) {
                    return <LineChart title="Title" 
                        data={this.props.data.map((a: IDataPoint) => a.value)} 
                        labels={this.props.data.map((a: IDataPoint) => a.timestamp)}
                        />;
                }
                return <LineChart title="Title" data={[12,23, 3]} labels={["oui","non", "yes"]}/>;

            default:
                return <div> DataViz not implemented yet </div>;
        };
    }
}