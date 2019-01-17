import * as React from 'react';

import { Button, TextField } from '@material-ui/core';

interface ITextProps {
    status: string;
    onChange: (status: string) => void;
}

interface ITextState {
    status: string;
}

export class Text extends React.Component<ITextProps, ITextState> {

    constructor(props: ITextProps){
        super(props);
        this.state = {
            status: props.status
        };
    }

    public handleSubmit(){
        this.props.onChange(this.state.status);
    }

    public handleChange(event: any) {
        this.setState({status: event.target.value});
    }

    public render() {
        console.log('text render', this.props.status, this.state.status);
        return (
            <div>
            <TextField
                value={this.state.status}
                onChange={(event: any) => this.handleChange(event)} />
            <Button color="primary" onClick={()=>this.handleSubmit()}>Set</Button>
            </div>
        );
    }
}