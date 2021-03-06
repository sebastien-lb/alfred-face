import * as React from 'react';

import { Toggle } from './Toogle';

import { default as Text } from './Text';

import Button from '@material-ui/core/Button';
import { HuePicker } from 'react-color';

import { DataType, IObjectAction } from '../../interfaces';

export function widgetFactory(currentState: any, action: IObjectAction, onChange: (a?: any) => void): any {
    const dataToSendType: DataType = action.payload;
    if (currentState === undefined && dataToSendType !== null && dataToSendType !== 'color') {
        return null;
    }

    switch(dataToSendType) {
        case 'boolean':
            return  <Toggle status={currentState} onChange={(a: boolean) => onChange(a)}/>;

        case 'string':
            return <Text status={currentState} onChange={(a: string) => onChange(a)}/>;

        case 'color':
            let additionnalProps: any = {};
            try {
                const colorRGB = currentState;
                additionnalProps = {color: colorRGB};
            } catch (error) {
                console.log("Cannot read state value");
            }

            return <div>
                <HuePicker {...additionnalProps} onChangeComplete={(color) => { currentState = color.rgb; }} />
                <Button color="primary" size={"small"} onClick={() => onChange(currentState)} key={action.id}>
                    Validate
                </Button>
            </div>

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
