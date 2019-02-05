import { connect } from "react-redux";

import { default as SensorAddPage } from './SensorAddPage';

import { IStore } from "../../interfaces";

// import { SENSOR_ACTIONS } from '../../store/sensor';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    addSensorRequest: (ip: string, port: string) => ({}) /*dispatch(SENSOR_ACTIONS.addSensorRequest(ip, port))*/,

});

export default connect(mapStateToProps, mapDispatchToProps)(SensorAddPage);