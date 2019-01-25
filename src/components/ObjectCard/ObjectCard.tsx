import * as React from 'react';

import { Style } from './ObjectCard.style';

import { ISmartObject } from '../../interfaces';

import { widgetFactory } from '../Widgets';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import CategoryIcon from '@material-ui/icons/Category';
import InsertChartIcon from '@material-ui/icons/InsertChart';

import { DataWidgetFactory } from '../DataWidgets';

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

    public getTopActionToRender() {
        if (!(this.props.smartObject.actions && this.props.smartObject.actions.length)) {
            return null
        }
        const importantActions = this.props.smartObject.actions.filter(action => !!action.important);
        if (importantActions.length){
            return importantActions[0]
        }
        else {
            return this.props.smartObject.actions[0]
        }
    }

    public render() {
        const smartObject = this.props.smartObject;
        const dataSource = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0] : null;
        const dataSourceName: string = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0].name : "";
        const topActionToRender = this.getTopActionToRender();
          
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
                            { topActionToRender ?
                                <div key={`${topActionToRender.id}-${dataSource ? dataSource.latest_value : null}`}>
                                    {widgetFactory(dataSource ? dataSource.latest_value : null, topActionToRender, (payload) => this.handleAction(topActionToRender!.id, payload))}
                                </div>
                            : null}
                         </Style.ObjectCardItemSubItem>
                    </Style.ObjectCardItemLastItemTwoParts>
                </Style.ObjectCardContainer>

                <ExpansionPanel expanded={this.state.expanded} onChange={(event, expanded) => this.onChangeExpansionPanel()}>
                    {this.state.expanded ? <ExpansionPanelSummary /> : null}
                    <ExpansionPanelDetails>
                        <Style.ExpansionPanelContent>
                            Data Sources
                            {(this.props.smartObject.dataSources || []).map(source => 
                                <div key={`${source.id}`}>
                                    <DataWidgetFactory dataSource={source} data={source.history || source.latest_value || undefined}/>
                                </div>
                            )}
                            {this.props.smartObject.actions && this.props.smartObject.actions.length ?  <p>Actions</p>  : null}
                            {(this.props.smartObject.actions || []).filter(action => action !== topActionToRender).map(action =>
                                <div key={`${action.id}-${dataSource ? dataSource.latest_value : null}`}>
                                    {widgetFactory(dataSource ? dataSource.latest_value : null, action, (payload) => this.handleAction(action!.id, payload))}
                                </div>
                            )}
                        </Style.ExpansionPanelContent>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </Card>
        );
    }
}

export { ObjectCard };