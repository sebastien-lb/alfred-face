import * as React from 'react';

import styled from 'styled-components';

import { Button, TextField } from '@material-ui/core';

interface ITextProps {
    className?: string;
    status: string;
    onChange: (status: string) => void;
}

interface ITextState {
    status: string;
}

class Text extends React.Component<ITextProps, ITextState> {

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
        return (
            <div className={this.props.className}>
            <TextField
                value={this.state.status}
                onChange={(event: any) => this.handleChange(event)} />
            <Button color="primary" onClick={()=>this.handleSubmit()}>Set</Button>
            </div>
        );
    }
}


const StyledText = styled(Text)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default StyledText;
