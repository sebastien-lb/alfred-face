import * as React from 'react';

import Switch from '@material-ui/core/Switch';

interface IToggleProps {
    status: boolean;
    onChange: (status: boolean) => void;
}

interface IToggleState {
    status: boolean;
}

export class Toggle extends React.Component<IToggleProps, IToggleState> {

    constructor(props: IToggleProps){
        super(props);
        console.log('toggle ', props.status)
        this.state = {
            status: props.status
        };
    }

    // public componentDidUpdate() {
    //     console.log('toggle did update', this.props.status, this.state.status)
    //     if (this.props.status !== this.state.status) {
    //         this.setState({status: this.props.status});
    //     }
    // }


    public handleChange(event: any) {
        console.log('toggle changed', this.props.status, this.state.status)
        this.setState({status: event.target.checked});
        this.props.onChange(this.state.status);
    }

    public render() {
        console.log('toggle render', this.props.status, this.state.status)
        return (
            <Switch
                checked={this.state.status}
                onChange={(event: any) => this.handleChange(event)}
            />
        );
    }
}

// export default styled(Toggle)`${Style.NotificationStyle}`