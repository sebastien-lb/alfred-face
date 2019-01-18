import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Add } from '@material-ui/icons/';

import { ScenarioCondition } from 'src/components';
import { DataType, IDataSource, IOperator, ISmartObject } from 'src/interfaces';

import { Style } from './ScenarioAdd.style';

interface IScenarioAddState {
    name: string;
    conditions: Array<{objectId?: string, datasource?: IDataSource, operatorId?: string, value?: string}>;
    actions: any[];
}

interface IScenarioAddProps {
    userToken?: string;
    smartObjects: ISmartObject[];
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
        console.log("new condition");
        this.setState({conditions: [...this.state.conditions, {}]});
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

    public handleAddAction() {
        console.log("new action");
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
                            <Style.CardContainer key={index}>
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
                                </Card>
                            </Style.CardContainer>
                        )}
                        
                    </Style.CardsContainer>
                </Style.SectionFormContainer>
                <Style.SectionFormContainer>
                    <span>Actions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddAction()}><Add /></IconButton>
                    <div className="AddScenarioForm-ActionContainer">
                        {(this.state.actions || []).map((value, index) => {
                            return <div key={index}>{value}</div>;
                        })}
                    </div>
                </Style.SectionFormContainer>
            </Style.AddScenarioFormContainer>
        )
    }
}

export { ScenariosAddPage } ;