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
        this.setState({objectId, action: undefined, payload: undefined});
        if (this.props.onChange) {
            // this.props.onChange(objectId, this.state.action, this.state.payload);
            this.props.onChange(objectId, undefined, undefined);
        }
    }

    public handleChangeAction(actionId: string) {
        const newAction = (this.props.actions || []).filter((action: IObjectAction) => action.id === actionId)[0];
        this.setState({action: newAction, payload: undefined});
        if (this.props.onChange) {
            this.props.onChange(this.state.objectId, newAction, undefined);
        }
    }

    public handleChangePayload(payload: string) {
        this.setState({ payload });
        if (this.props.onChange) {
            this.props.onChange(this.state.objectId, this.state.action, payload);
        }
    }

    public render(){
        console.log("render action scenar", this.state.objectId, this.props.actions, this.props.objectValue);
        return (
            <Style.ConditionContainer>
                {this.props.objectValue && this.props.objectValue.length ?
                    <Selector name="Object" values={this.props.objectValue} onChange={(id: string) => this.handleChangeObject(id)}/>
                : null }
                {this.state.objectId && this.props.actions && this.props.actions.length ?
                    [
                        <Selector key={this.props.actions[0].name + "sel"} name="Action" values={this.props.actions} onChange={(id: string) => this.handleChangeAction(id)}/>,
                        this.state.action && this.state.action.payload ?
                        <TextField key={this.props.actions[0].name + "tf"} label="Payload"
                                onChange={(ev) => this.handleChangePayload(ev.target.value)}/> : null
                    ]
                : null }
            </Style.ConditionContainer>
        );
    }
}

export { ActionScenario };
