import * as React from 'react';

import { Toggle } from './Toogle';

import { default as Text } from './Text';

import Button from '@material-ui/core/Button';


import { DataType, IObjectAction } from '../../interfaces';

export function widgetFactory(currentState: any, action: IObjectAction, onChange: (a?: any) => void): any {

    const dataToSendType: DataType = action.payload;
    console.log("widget factory", currentState, action, onChange);
    console.log(dataToSendType);
    if(currentState === undefined && dataToSendType !== null) {
        return null;
    }
    switch(dataToSendType) {
        case 'boolean':
            return  <Toggle status={currentState} onChange={(a: boolean) => onChange(a)}/>;

        case 'list':
            return null;

        case 'string':

            return <Text status={currentState} onChange={(a: string) => onChange(a)}/>;


        // Action without payload are simple buttons
        case null:
            return (
                <Button color="primary" size={"small"} onClick={() => onChange()} key={action.id}>
                        {action.name}
                </Button>
            );

        default:
            return null;
    }
}