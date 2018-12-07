import { connect } from 'react-redux';

import { DashboardPage } from './Dashboard';

import { SMART_OBJECT_ACTIONS } from 'src/store/smartobject';
import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => {
    return {

    };
}

const mapDispatchToProps = (dispatch:any) => ({
    addSmartObjectRequest: (name: string, ip: string, port: string) => dispatch(SMART_OBJECT_ACTIONS.addSmartObjectRequest({ name, ip, port })),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
