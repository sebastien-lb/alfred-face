import { connect } from 'react-redux';

import{ ScenariosAddPage } from './ScenariosAdd';

import { DataType, IDataSource, IObjectAction, IOperator, ISmartObject, IStore } from '../../interfaces';

import { SCENARIO_ACTIONS } from '../../store/scenarios';

const mapStateToProps = (state: IStore, dispatch: any) => {
    return {
        userToken: state.userReducer.user ? state.userReducer.user.token : null,
        smartObjects: state.smartObjectReducer.smartObjects,
        getActionsForSmartObject: (objectId: string): IObjectAction[] => {
            return ((state.smartObjectReducer.smartObjects || [])
                        .filter((object: ISmartObject) => object.id === objectId)[0]
                            .actions || [])
        },
        getDatasourcesForSmartObject: (objectId: string): IDataSource[] => {
            return ((state.smartObjectReducer.smartObjects || [])
                        .filter((object: ISmartObject) => object.id === objectId)[0]
                            .dataSources || [])
        },
        getOperatorForDataType: (type: DataType): IOperator[] => {
            return (state.scenarioReducer.operators || [])
                .filter((operator: IOperator) => operator.allowedTypes.indexOf(type) !== -1)
        }

    }
}

const mapDispatchToProps = (dispatch:any) => ({
    fetchOperators: (token: string) => dispatch(SCENARIO_ACTIONS.fetchAllOperatorsRequest({token})),
    createScenarioRequest: (name: string, actions: any, conditions: any, token: string) => dispatch(SCENARIO_ACTIONS.addScenarioRequest({ name, actions, conditions, token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenariosAddPage);
