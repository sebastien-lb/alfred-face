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
                let i = 0;
                // console.log(this.props.data)
                
                if (this.props.data && this.props.data.length) {
                const tableau: any[] = [...this.props.data];

                for (i=0; i<tableau.length; i++) {
                    tableau[i].timestamp = new Date(tableau[i].timestamp);
                    if ((tableau[i].timestamp).getTime() > (Date.now() - 50000)) {                        
                        console.log(tableau[i].timestamp);
                    }
                
                    else {
                        tableau.splice(i,1);
                        console.log("popped", i);

                    }
                        
                    }  
                
            
               
                i = 0;
                console.log("tableau avant", tableau)

                while (i < tableau.length - 2) {
                    // console.log("i",i);
                    // console.log("tableau",tableau.length)
                    if (tableau[i].value !== tableau[i+1].value) {
                        tableau.splice(i+1, 0, tableau[i]);
                        
                        if (tableau[i].value === 0 && tableau[i+1].value === 1) {
                            const date1 = new Date(tableau[i+2].timestamp);
                            date1.setSeconds(date1.getSeconds() - 1);
                            tableau[i+1].timestamp = date1;
                            tableau[i+1].id = "added01";
                        }

                        if (tableau[i].value === 1 && tableau[i+1].value === 0) {
                            const date1 = new Date(tableau[i].timestamp);
                            date1.setSeconds(date1.getSeconds() + 1);
                            tableau[i+1].timestamp = date1;
                            tableau[i+1].id = "added10";
                        }
                        i++;
                    }
                    i++;

                        // console.log(i);
                    }
                    console.log("tableau apres", tableau)

                    return <LineChart title="" 
                        data={tableau.map((a: IDataPoint) => a.value)}
                        labels={tableau.map((a: IDataPoint) => a.timestamp.toString())}
                        />;
                    
                 
                }
                 return <LineChart title="Title" data={[12,23, 3]} labels={["oui","non", "yes"]}/>;
            
            default:
                return <div> DataViz not implemented yet </div>;
        };
    }
}
