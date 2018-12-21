import * as React from 'react';

import { Style } from './ObjectCard.style';

import { ISmartObject } from '../../interfaces';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import CategoryIcon from '@material-ui/icons/Category';
import InsertChartIcon from '@material-ui/icons/InsertChart';


interface IObjectCardProps {
    smartObject: ISmartObject;
    category: string;
    onAction: (actionId: string) => void;
}


class ObjectCard extends React.Component<IObjectCardProps, {}>  {
    public state = {
        expanded: false,
    };

    public handleClickLastItem() {
        this.setState({
          expanded: true
        });
    };

    public onChangeExpansionPanel() {
        this.setState({
            expanded: false
        });
    }

    public handleAction(actionId: string) {
        this.props.onAction(actionId);
    }

    public render() {
        const smartObject = this.props.smartObject;
        const dataSource: string = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0].name : "";
        return (
            <Card >
                <Style.ObjectCardContainer>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{smartObject.name}</Style.ObjectCardItemTitle>
                        <Style.ObjectCardItemContent>
                            {/* ObjectIconPlaceHolder */}
                            <CategoryIcon />
                        </Style.ObjectCardItemContent>
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{this.props.category}</Style.ObjectCardItemTitle>
                        <Style.ObjectCardItemContent>
                            <p>
                                {dataSource}
                            </p>
                            <Style.ObjectStatusDescription>
                                Status
                            </Style.ObjectStatusDescription>
                        </Style.ObjectCardItemContent>
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItemLastItemTwoParts onClick={() => this.handleClickLastItem()}>
                        <Style.ObjectCardItemSubItem>
                            {/* DataIconPlaceHolder */}
                            <InsertChartIcon />
                        </Style.ObjectCardItemSubItem>
                        <Style.ObjectCardItemSubItem>
                            {(this.props.smartObject.actions || []).map(action =>
                                <Button color="primary" size={"small"} onClick={() => this.handleAction(action.id)} key={action.id}>
                                    {action.name}
                                </Button>
                            )}
                         </Style.ObjectCardItemSubItem>
                    </Style.ObjectCardItemLastItemTwoParts>
                </Style.ObjectCardContainer>

                <ExpansionPanel expanded={this.state.expanded} onChange={(event, expanded) => this.onChangeExpansionPanel()}>
                    {this.state.expanded ? <ExpansionPanelSummary /> : null}
                    <ExpansionPanelDetails>
                        <Typography>
                            <ul>{smartObject.ip}</ul>
                            <ul>{smartObject.port}</ul>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </Card>
        );
    }
}

export { ObjectCard };
