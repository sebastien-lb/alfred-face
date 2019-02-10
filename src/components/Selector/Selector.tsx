import * as React from 'react';

import { InputLabel, MenuItem, Select } from '@material-ui/core';

import { Style } from './Selector.style';


interface ISelectorProps {
    name: string;
    values: any[];
    forceValue?: string;
    onChange?: (id: string) => void; 
}

interface ISelectorState {
    selectedValueId?: string;
    selectedValueName?: string;
}

class Selector extends React.Component<ISelectorProps, ISelectorState> {

    constructor(props: ISelectorProps) {
        super(props);
        const selectedValueId = this.props.values[0].id;
        const selectedValueName = this.props.values[0].name;
        this.state = {selectedValueId, selectedValueName};
    }

    public handleSelect(ev:any){
        const id = ev.target.value;
        const value = this.props.values.filter((v)=> v.id === id)[0];
        const selectedValueId = value.id;
        const selectedValueName = value.name
        this.setState({selectedValueId, selectedValueName});
        if (this.props.onChange) {
            this.props.onChange(selectedValueId);
        }
    }

    public render() {
        return (
            <Style.SelectorContainer>
                <InputLabel>{this.props.name}</InputLabel>
                <Select key={"sel-" + this.state.selectedValueId} onChange={(v) => this.handleSelect(v)}
                    value={this.state.selectedValueId}>
                    {(this.props.values || []).map(value =>
                        <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                    )}
                </Select>
            </Style.SelectorContainer>
        );
    }
}

export default Selector;