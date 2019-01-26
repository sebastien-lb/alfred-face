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
        // console.log("render data widget", dataType, this.props.dataSource, this.props.data);
        switch(dataType) {

            // case 'number':
            //     return;
            case 'boolean':

                console.log("props", this.props);
                if (this.props.data && this.props.data.length) {
                    // return <LineChart title="Title" 
                    //     data={this.props.data.map((a: IDataPoint) => a.value)} 
                    //     labels={this.props.data.map((a: IDataPoint) => a.timestamp)}
                    //     />;

                    let i = 0;
                    const tableau: any[] = [...this.props.data];
                    console.log(tableau[0]);
                    
                    while (i < tableau.length - 2) {
                        console.log("i",i);
                        console.log("tableau",tableau.length)
                        if (tableau[i].value !== tableau[i+1].value) {
                            tableau.splice(i+1, 0, tableau[i]);
                            tableau[i+1].timestamp = tableau[i+2].timestamp -0.01;
                            i++;
                        }
                        i++;
                        // console.log(i);
                    }

                    return <LineChart title="" 
                        data={tableau.map((a: IDataPoint) => a.value)} 
                        labels={tableau.map((a: IDataPoint) => {
                            const date = new Date(a.timestamp);
                            return date.toISOString();
                        })}
                        />;
                    
                 }

                 return <LineChart title="Title" data={[12,23, 3]} labels={["oui","non", "yes"]}/>;

            default:
                return <div> DataViz not implemented yet </div>;
        };
    }
}
