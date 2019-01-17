import * as React from 'react';

import { InputLabel, MenuItem, Select } from '@material-ui/core';

interface ISelectorProps {
    name: string;
    values: any[];
}

interface ISelectorState {
    selectedValueId?: string;
    selectedValueName?: string;
}

class Selector extends React.Component<ISelectorProps, ISelectorState> {

    constructor(props: ISelectorProps) {
        super(props);
        console.log(this.props.values)
        const selectedValueId = this.props.values[0].id;
        const selectedValueName = this.props.values[0].name;
        this.state = {selectedValueId, selectedValueName};
    }
    public handleSelect(ev:any){
        const id = ev.target.value;
        const value = this.props.values.filter((v)=> v.id === id)[0];
        console.log("Value selected");
        console.log(value);
        const selectedValueId = value.id;
        const selectedValueName = value.name
        this.setState({selectedValueId, selectedValueName});
    }

    public render() {
        console.log(this.state);
        return (
            <div>
                <InputLabel>{this.props.name}</InputLabel>
                <Select onChange={(v) => this.handleSelect(v)}
                    value={this.state!.selectedValueName}>
                    {(this.props.values || []).map(value =>
                        <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                    )}
                </Select>
            </div>
        );
    }
}

export default Selector;