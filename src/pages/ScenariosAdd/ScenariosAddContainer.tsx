import { connect } from 'react-redux';

import{ ScenariosAddPage } from './ScenariosAdd';

import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => {
    return {
        userToken: state.userReducer.user ? state.userReducer.user.token : null,
    }
}

export default connect(mapStateToProps, null)(ScenariosAddPage);