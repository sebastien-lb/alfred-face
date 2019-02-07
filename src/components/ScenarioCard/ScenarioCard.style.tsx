import styled from 'styled-components';
// import { COLOR } from '../../style';


const ScenarioActionsAndConditionContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const ScenarioActionsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ScenarioConditionsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const Style = {
    ScenarioActionsAndConditionContainer,
    ScenarioActionsContainer,
    ScenarioConditionsContainer,
}