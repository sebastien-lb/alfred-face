import * as React from 'react';

import { Toggle } from './Toogle';

// import Switch from '@material-ui/core/Switch';


import { DataType } from '../../interfaces';

export function widgetFactory(currentState: any, dataToSendType: DataType, onChange: (a: any) => void): any {

    console.log("widget factory", currentState, dataToSendType);
    if(currentState === undefined) {
        return null;
    }
    switch(dataToSendType) {
        case 'boolean':
            return  <Toggle status={currentState} onChange={(a: boolean) => onChange(a)}/>;
            // return <Switch checked={currentState} onChange={(event: any) => true}/>;
        case 'list':
            return null;
        default:
            return null;
    }
}