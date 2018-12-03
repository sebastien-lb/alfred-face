import { connect } from 'react-redux';

import { DashboardPage } from './Dashboard';

import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => {
    return {

    };
}

const mapDispatchToProps = (dispatch:any) => ({
    addSensorRequest: (ip: string, port: string) => ({}) /*dispatch(SENSOR_ACTIONS.addSensorRequest(ip, port))*/,
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);