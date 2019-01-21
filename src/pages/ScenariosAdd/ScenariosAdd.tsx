import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Add, Delete } from '@material-ui/icons/';

import { ActionScenario, ScenarioCondition } from '../../components';
import { DataType, IDataSource, IObjectAction, IOperator, ISmartObject } from '../../interfaces';

import { Style } from './ScenarioAdd.style';

interface IScenarioAddState {
    name: string;
    conditions: Array<{objectId?: string, datasource?: IDataSource, operatorId?: string, value?: string}>;
    actions: Array<{objectId?: string, action?: IObjectAction, payload?: string}>;
}

interface IScenarioAddProps {
    userToken?: string;
    smartObjects: ISmartObject[];
    getActionsForSmartObject: (objectId: string) => IObjectAction[];
    getDatasourcesForSmartObject: (objectId: string) => IDataSource[];
    getOperatorForDataType: (type: DataType) => IOperator[];
    fetchOperators: (token: string) => void;
}

class ScenariosAddPage extends React.Component<IScenarioAddProps, IScenarioAddState> {

    constructor(props: IScenarioAddProps) {
        super(props);
        this.state = {
            name: '',
            conditions: [],
            actions: []
        }
    }

    public componentWillMount() {
        if (this.props.userToken) {
            this.props.fetchOperators(this.props.userToken);
        }
    }

    public handleNameChange(name: string) {
        this.setState({ name });
    }

    public handleAddCondition() {
        this.setState({conditions: [...this.state.conditions, {}]});
    }

    public handleDeleteCondition(indexCondition: number) {
        this.setState({conditions: this.state.conditions.filter((c, index) => index !== indexCondition)});
    }

    public handleConditionChange(indexCondition: number, objectId: string, datasource?: IDataSource, operatorId?: string, value?: string) {
        this.setState({conditions: this.state.conditions.map((condition, index) => {
            if (indexCondition === index) {
                console.log("handleCOnditionChange", {...condition, objectId, datasource, operatorId, value});
                return {...condition, objectId, datasource, operatorId, value};
            }
            return condition;
        })});
    }

    public handleActionChange(indexAction: number, objectId: string, action?: IObjectAction, payload?: string) {
        this.setState({actions: this.state.actions.map((actionState, index) => {
            if (indexAction === index) {
                console.log("handleActionChange", {...actionState, objectId, action, payload});
                return {...actionState, objectId, action, payload};
            }
            return actionState;
        })});
    }

    public handleAddAction() {
        this.setState({actions: [...this.state.actions, {}]});
    }

    public handleDeleteAction(indexAction: number) {
        this.setState({actions: this.state.actions.filter((c, index) => index !== indexAction)});
    }

    public handleCreateScenario() {
        console.log("Create new scenario");
    }

    public render() {
        return (
            <Style.AddScenarioFormContainer>
                <TextField 
                    id="name"
                    value={this.state.name}
                    label={'Scenario Name'}
                    className="AddScenarioForm-TextField"
                    onChange={(ev)=>this.handleNameChange(ev.target.value)} />

                <Style.SectionFormContainer>
                    <span>Conditions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddCondition()}><Add /></IconButton>
                    <Style.CardsContainer>
                        {(this.state.conditions || []).map((condition, index) => 
                            <Style.CardContainer key={`${index}`}>
                                <Card>
                                    <CardContent>
                                        <ScenarioCondition 
                                            objectValue={this.props.smartObjects}
                                            datasource={condition.objectId ? this.props.getDatasourcesForSmartObject(condition.objectId) : undefined}
                                            operator={condition.datasource ? this.props.getOperatorForDataType(condition.datasource.data_type) : undefined}
                                            onChange={(objectId: string, datasource?: IDataSource, operatorId?: string, value?: string) => 
                                                this.handleConditionChange(index, objectId, datasource, operatorId, value)
                                            }/>
                                    </CardContent>
                                    <IconButton color="secondary" onClick={()=>this.handleDeleteCondition(index)}><Delete /></IconButton>
                                </Card>
                            </Style.CardContainer>
                        )}
                        
                    </Style.CardsContainer>
                </Style.SectionFormContainer>
                <Style.SectionFormContainer>
                    <span>Actions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddAction()}><Add /></IconButton>
                    <Style.CardsContainer>
                        {(this.state.actions || []).map((actionState, index) => 
                            <Style.CardContainer key={`${index}`}>
                                <Card>
                                    <CardContent>
                                        <ActionScenario 
                                            objectValue={this.props.smartObjects}
                                            actions={actionState.objectId ? this.props.getActionsForSmartObject(actionState.objectId) : undefined}
                                            onChange={(objectId: string, action?: IObjectAction, payload?: string) => 
                                                this.handleActionChange(index, objectId, action, payload)
                                            }/>
                                    </CardContent>
                                    <IconButton color="secondary" onClick={()=>this.handleDeleteAction(index)}><Delete /></IconButton>
                                </Card>
                            </Style.CardContainer>
                        )}
                    </Style.CardsContainer>
                </Style.SectionFormContainer>
                <Button color="primary" onClick={() => this.handleCreateScenario()} >Create Scenario</Button>
            </Style.AddScenarioFormContainer>
        )
    }
}

export { ScenariosAddPage } ;