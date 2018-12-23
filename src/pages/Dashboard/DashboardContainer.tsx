import { connect } from 'react-redux';

import { DashboardPage } from './Dashboard';

import { IStore } from '../../interfaces';
import { getNotifMessage, SMART_OBJECT_ACTIONS } from '../../store/smartobject';

const mapStateToProps = (state: IStore) => {
    return {
        notifMessage: getNotifMessage(state.smartObjectReducer),
        smartObjects: state.smartObjectReducer.smartObjects,
        userToken: state.userReducer.user ? state.userReducer.user.token : null,
    };
}

const mapDispatchToProps = (dispatch:any) => ({
    addSmartObjectRequest: (name: string, ip: string, port: string, token: string) => dispatch(SMART_OBJECT_ACTIONS.addSmartObjectRequest({ name, ip, port, token })),
    fetchAllSmartObjectsRequest: (token: string) => dispatch(SMART_OBJECT_ACTIONS.fetchAllSmartObjectsRequest({ token })),
    performActionRequest: (actionId: string, token: string) => dispatch(SMART_OBJECT_ACTIONS.performActionRequest({actionId, token})),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
