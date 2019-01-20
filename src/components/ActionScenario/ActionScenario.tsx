import * as React from 'react';

import Selector from '../Selector/Selector';

import { TextField } from '@material-ui/core';

import { IObjectAction } from '../../interfaces';

import { Style } from './ActionScenario.style';

interface IActionScenarioState {
    objectId?: string;
    action?: IObjectAction;
    payload?: string;
}

interface IActionScenarioProps {
    objectValue: Array<{name?: string, id?: string}>;
    actions?: IObjectAction[];
    onChange?: (objectId?: string, action?: IObjectAction, payload?: string) => void;
}

class ActionScenario extends React.Component<IActionScenarioProps, IActionScenarioState> {

    constructor(props: IActionScenarioProps) {
        super(props);

        this.state = {}
    }

    public handleChangeObject(objectId: string) {
        this.setState({objectId});
        if (this.props.onChange) {
            this.props.onChange(objectId, this.state.action, this.state.payload);
        }
    }

    public handleChangeAction(actionId: string) {
        const newAction = (this.props.actions || []).filter((action: IObjectAction) => action.id === actionId)[0];
        this.setState({action: newAction});
        if (this.props.onChange) {
            this.props.onChange(this.state.objectId, newAction, this.state.payload);
        }
    }

    public render(){
        return (
            <Style.ConditionContainer>
                {this.props.objectValue && this.props.objectValue.length ?
                    <Selector key={this.state.objectId} name="Object" values={this.props.objectValue} onChange={(id: string) => this.handleChangeObject(id)}/>
                : null }
                {this.state.objectId && this.props.actions && this.props.actions.length ?
                    [
                        <Selector key={this.props.actions[0].name + "sel"} name="Action" values={this.props.actions} onChange={(id: string) => this.handleChangeAction(id)}/>,
                        this.state.action && this.state.action.payload ? <TextField key={this.props.actions[0].name + "tf"} label="Payload" /> : null
                    ]
                : null }
            </Style.ConditionContainer>
        );
    }
}

export { ActionScenario };