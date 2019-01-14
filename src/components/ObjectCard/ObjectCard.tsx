import * as React from 'react';

import { Style } from './ObjectCard.style';

import { ISmartObject } from '../../interfaces';

import { widgetFactory } from '../Widgets';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import CategoryIcon from '@material-ui/icons/Category';
import InsertChartIcon from '@material-ui/icons/InsertChart';

import {Line} from 'react-chartjs-2';

interface IObjectCardProps {
    smartObject: ISmartObject;
    category: string;
    onAction: (actionId: string, payload: any) => void;
}


class ObjectCard extends React.Component<IObjectCardProps, {}>  {
    public state = {
        expanded: false,
    };

    public handleClickLastItem() {
        this.setState({
          expanded: !this.state.expanded
        });
    };

    public onChangeExpansionPanel() {
        this.setState({
            expanded: false
        });
    }

    public handleAction(actionId: string, payload: any) {
        console.log("action handled, payload:", payload);
        this.props.onAction(actionId, payload);
    }

    public render() {
        const smartObject = this.props.smartObject;
        const dataSource = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0] : null;
        // const action = smartObject.actions && smartObject.actions.length ? smartObject.actions[0] : null;
        const dataSourceName: string = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0].name : "";
        
        const chardata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                // borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                // borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
          
        return (
            <Card >
                <Style.ObjectCardContainer>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{smartObject.name}</Style.ObjectCardItemTitle>
                        <Style.ObjectCardItemContent>
                            <CategoryIcon />
                        </Style.ObjectCardItemContent>
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{this.props.category}</Style.ObjectCardItemTitle>
                        <Style.ObjectCardItemContent>
                            <p>
                                {dataSourceName}
                            </p>
                            <Style.ObjectStatusDescription>
                                Status: {String(dataSource ? dataSource.latest_value : null)}
                            </Style.ObjectStatusDescription>
                        </Style.ObjectCardItemContent>
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItemLastItemTwoParts>
                        <Style.ObjectCardItemSubItem onClick={() => this.handleClickLastItem()}>
                            <InsertChartIcon />
                        </Style.ObjectCardItemSubItem>
                        <Style.ObjectCardItemSubItem>
                            {(this.props.smartObject.actions || []).map(action =>
                                // FIND STATE CORRESPONDING TO ACTION ::: dataSource ? dataSource.latest_value : null
                                <div key={`${action.id}-${dataSource ? dataSource.latest_value : null}`}>
                                    {widgetFactory(dataSource ? dataSource.latest_value : null, action, (payload) => this.handleAction(action!.id, payload))}
                                </div>
                            )}
                         </Style.ObjectCardItemSubItem>
                    </Style.ObjectCardItemLastItemTwoParts>
                </Style.ObjectCardContainer>

                <ExpansionPanel expanded={this.state.expanded} onChange={(event, expanded) => this.onChangeExpansionPanel()}>
                    {this.state.expanded ? <ExpansionPanelSummary /> : null}
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem Ipsum
                        </Typography>

                        <Line data={chardata} />

                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </Card>
        );
    }
}

export { ObjectCard };