import { connect } from 'react-redux';

import { default as ScenariosPage } from './Scenarios';


import { IStore } from '../../interfaces';

import { SCENARIO_ACTIONS } from '../../store/scenarios';

const mapStateToProps = (state: IStore) => {
    return {
        scenarios: state.scenarioReducer.scenarios,
        token: state.userReducer.user!.token,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchScenarios: (token: string) => dispatch(SCENARIO_ACTIONS.fetchAllScenarioRequest({ token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenariosPage);