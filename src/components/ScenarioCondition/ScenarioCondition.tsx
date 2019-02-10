import * as React from 'react';

import Selector from '../Selector/Selector';

import { TextField } from '@material-ui/core';

import { IDataSource } from '../../interfaces';

import { Style } from './ScenarioCondition.style';

interface IScenarioConditionState {
    objectId?: string;
    datasource?: IDataSource;
    operatorId?: string;
    value?: string;
}

interface IScenarioConditionProps {
    objectValue: Array<{name?: string, id?: string}>;
    datasource?: IDataSource[];
    operator?: Array<{name: string, id: string}>;
    onChange?: (objectId?: string, datasource?: IDataSource, operatorId?: string, value?: string) => void;
}

class ScenarioCondition extends React.Component<IScenarioConditionProps, IScenarioConditionState> {

    constructor(props: IScenarioConditionProps) {
        super(props);

        this.state = {}
    }

    public handleChangeObject(objectId: string) {
        this.setState({objectId});
        if (this.props.onChange) {
            // this.props.onChange(objectId, this.state.datasource, this.state.operatorId, this.state.value);
            this.props.onChange(objectId, undefined, undefined, undefined);
        }
    }

    public handleChangeDatasource(datasourceId: string) {
        const newDatasource = (this.props.datasource || []).filter((datasource: IDataSource) => datasource.id === datasourceId)[0];
        this.setState({datasource: newDatasource});
        if (this.props.onChange) {
            // this.props.onChange(this.state.objectId, newDatasource, this.state.operatorId, this.state.value);
            this.props.onChange(this.state.objectId, newDatasource, undefined, undefined);
        }
    }

    public handleChangeOperator(operatorId: string) {
        this.setState({ operatorId });
        if (this.props.onChange) {
            // this.props.onChange(this.state.objectId, this.state.datasource, operatorId, this.state.value);
            this.props.onChange(this.state.objectId, this.state.datasource, operatorId, undefined);
        }
    }

    public handleChangeValue(value: string) {
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(this.state.objectId, this.state.datasource, this.state.operatorId, value);
        }
    }

    public render(){
        return (
            <Style.ConditionContainer>
                {this.props.objectValue && this.props.objectValue.length ?
                    <Selector name="Object" values={this.props.objectValue} onChange={(id: string) => this.handleChangeObject(id)}/>
                : null }
                {this.state.objectId && this.props.datasource && this.props.datasource.length ?
                    <Selector name="DataSource" values={this.props.datasource} onChange={(id: string) => this.handleChangeDatasource(id)}/>
                : null }
                {this.state.datasource && this.state.objectId &&this.props.datasource && this.props.operator && this.props.operator.length ?
                    [
                        <Selector key={this.props.operator[0].name + "sel"} name="Operator" values={this.props.operator} onChange={(operatorId: string) => this.handleChangeOperator(operatorId)} />,
                        <TextField key={this.props.operator[0].name + "tf"} label="Value" onChange={(ev) => this.handleChangeValue(ev.target.value)}/>
                    ]
                : null }
            </Style.ConditionContainer>
        );
    }
}

export { ScenarioCondition };
