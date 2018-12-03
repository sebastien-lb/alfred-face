
import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './SensorAdd.css';

interface ISensorAddPageProps {
    addSensorRequest: (ip: string, port: string) => void;
}

interface ISensorAddPageState {
    ip: string;
    port: string;
}

class SensorAddPage extends React.Component<ISensorAddPageProps, ISensorAddPageState>  {

    constructor(props: ISensorAddPageProps){
        super(props);
        const ip = "";
        const port = "";
        this.state = {ip, port}
    }

    public handleIPChange(ip: string) {
        this.setState({ip});
    }

    public handlePortChange(port: string) {
        this.setState({port});
    }

    public handleSubmit() {
        this.props.addSensorRequest(this.state.ip, this.state.port);
    }

    public render() {
        return (
            <div className="AddSensorPage">
                Add sensor
                <div>
                    <form className="AddSensorPage-Form" autoComplete="off">
                        <TextField
                            id="ip"
                            label="ip"
                            value={this.state.ip}
                            className="AddSensorPage-TextField"
                            onChange={(ev) => this.handleIPChange(ev.target.value)}/>
                        <TextField
                            id="port"
                            label="port"
                            value={this.state.port}
                            className="AddSensorPage-TextField"
                            type="password"
                            onChange={(ev) => this.handlePortChange(ev.target.value)}/>
                        <Button variant="contained" color="primary" className="AddSensorPage-Button" onClick={() => this.handleSubmit()}>
                            Add Object
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export { SensorAddPage };