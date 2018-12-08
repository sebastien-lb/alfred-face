import { connect } from 'react-redux';

import { DashboardPage } from './Dashboard';

import { SMART_OBJECT_ACTIONS } from 'src/store/smartobject';
import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => {
    return {
        smartObjects: state.smartObjectReducer.smartObjects,
        userToken: state.userReducer.user ? state.userReducer.user.token : null,
    };
}

const mapDispatchToProps = (dispatch:any) => ({
    addSmartObjectRequest: (name: string, ip: string, port: string, token: string) => dispatch(SMART_OBJECT_ACTIONS.addSmartObjectRequest({ name, ip, port, token })),
    fetchAllSmartObjectsRequest: (token: string) => dispatch(SMART_OBJECT_ACTIONS.fetchAllSmartObjectsRequest({ token })),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
