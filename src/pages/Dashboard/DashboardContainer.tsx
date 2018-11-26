import { connect } from 'react-redux';

import { DashboardPage } from './Dashboard';

import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => {
    return {

    };
}

const mapDispatchToProps = (dispatch:any) => ({
    });


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);