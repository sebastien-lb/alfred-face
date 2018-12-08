import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Dashboard.css';

import { ISmartObject } from 'src/interfaces';
import { ObjectCard } from '../../components';


interface IDashboardPageProps {
    userToken: string;
    smartObjects: ISmartObject[];
    addSmartObjectRequest: (name: string, ip: string, port: string, token: string) => void;
    fetchAllSmartObjectsRequest: (token: string) => void;
}

interface IDashboardPageState {
    ip: string;
    port: string;
    name: string;
}

class DashboardPage extends React.Component <IDashboardPageProps,IDashboardPageState> {

    constructor(props: IDashboardPageProps){
        super(props);
        const ip = "";
        const port = "";
        const name = "";
        this.state = {ip, port, name}
    }

    public componentWillMount() {
        this.props.fetchAllSmartObjectsRequest(this.props.userToken);
    }

    public handleIPChange(ip: string) {
        this.setState({ip});
    }

    public handleNameChange(name: string) {
        this.setState({ name });
    }

    public handlePortChange(port: string) {
        this.setState({port});
    }

    public handleSubmit() {
        this.props.addSmartObjectRequest(this.state.name, this.state.ip, this.state.port, this.props.userToken);
    }

    public render() {
        return (
            <div className="DashboardPage">
            DashboardPage
                <div className="SeriesPage-Tiles">
                    {(this.props.smartObjects || []).map(smartObject =>
                        <div key={`${smartObject.id}`}>
                            <ObjectCard smartObject={smartObject} category={"Lamp"} />
                        </div>
                    )}
                </div>

                <div>
                    <form className="AddSensorPage-Form" autoComplete="off">
                        <TextField
                            id="name"
                            label="name"
                            value={this.state.name}
                            className="AddSensorPage-TextField"
                            onChange={(ev) => this.handleNameChange(ev.target.value)} />
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
                            type="text"
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

export { DashboardPage };
