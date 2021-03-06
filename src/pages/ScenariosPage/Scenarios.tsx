import * as React from 'react';
import {Redirect} from 'react-router-dom';

import { IObjectAction, IScenario } from '../../interfaces';

import { ActionCard, ConditionCard, ScenarioDrawer } from '../../components';

import { Style } from './Scenarios.style';

import { withStyles, WithStyles } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

interface IScenarioPageProps extends WithStyles<typeof Style.styles> {
    token: string;
    scenarios?: IScenario[];
    fetchScenarios: (token: string) => void;
}

interface IScenariosPageState {
    shouldRedirect: boolean;
    currentScenarioIndex: number;
}

class ScenariosPage extends React.Component<IScenarioPageProps, IScenariosPageState> {

    constructor(props: any){
        super(props);
        this.state = {
            shouldRedirect: false,
            currentScenarioIndex: -1
        };
    }

    public componentWillMount() {
        this.props.fetchScenarios(this.props.token);
    }

    public handleAddScenario() {
        this.setState({
            shouldRedirect: true,
        });
    }

    public handleSelectScenario(index: number){
        this.setState({
            currentScenarioIndex: index,
        });
    }

    public render() {
        let actions: IObjectAction[] = [];
        if (this.props.scenarios && this.state.currentScenarioIndex!==-1){
            if (this.props.scenarios[this.state.currentScenarioIndex]){
                const scenario = this.props.scenarios[this.state.currentScenarioIndex];
                if (scenario.objectActions){
                    for (const key of Object.keys(scenario.objectActions)){
                        scenario.objectActions[key]!.map((action: IObjectAction) => {
                            actions = [...actions, action];
                        })
                    }
                }
            }
        }
        return (
            <div>
                <div className={this.props.classes.toolbar} />
                <ScenarioDrawer
                        scenarios={this.props.scenarios}
                        selectScenario={(index: number) => this.handleSelectScenario(index)}
                        addNewScenario={() => this.handleAddScenario()} />
                <Style.ScenarioPageContainer id="Scenarios">
                    <Style.TitleContainer>
                        <Typography variant="h6">
                            {
                                this.state.currentScenarioIndex !== -1 ? <Typography variant="title">{this.props.scenarios![this.state.currentScenarioIndex].name}</Typography> :
                                <Typography variant="title"> Please select a scenario, or create a new one </Typography>
                            }
                        </Typography>
                    </Style.TitleContainer>
                    <Divider />
                    <Style.ScenarioPageListContainer id="Scenarios-Lists" className={this.props.classes.content}>
                        <Style.ScenarioListContainer>
                            <Typography variant="h6">Conditions:</Typography>
                            {this.state.currentScenarioIndex !== -1 ?
                                <List>
                                    {this.props.scenarios ? 
                                        (this.props.scenarios[this.state.currentScenarioIndex].conditions || []).map((condition,index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <ConditionCard condition={condition} />
                                                </ListItem>
                                            );
                                        }): <div />}
                                </List>
                            : <div />}
                        </Style.ScenarioListContainer>
                        <Style.ScenarioListContainer>
                            <Typography variant="h6">Actions:</Typography>
                            {
                                this.state.currentScenarioIndex !== -1 ?
                                    <List>
                                        {
                                            (actions || []).map((action, index) => {
                                                return (
                                                    <ListItem key={index}>
                                                        <ActionCard action={action} />
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>
                                : <div />
                            }
                        </Style.ScenarioListContainer>
                        {
                            this.state.shouldRedirect ?
                                <Redirect to="/addScenarios" push={true} />: <div />
                        }
                    </Style.ScenarioPageListContainer>
                </Style.ScenarioPageContainer>
            </div>
        )
    }
}

export default withStyles(Style.styles)(ScenariosPage);