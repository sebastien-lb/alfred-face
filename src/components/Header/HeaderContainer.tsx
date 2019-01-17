import { connect } from "react-redux";
import { default as Header } from './Header';

import { HEADER_ACTIONS } from '../../store/header';

import { IStore } from '../../interfaces';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    goToDashboard: () => dispatch(HEADER_ACTIONS.pushDashboard()),
    goToScenarios: () => dispatch(HEADER_ACTIONS.pushScenarios()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);