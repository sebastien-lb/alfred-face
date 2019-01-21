import styled from 'styled-components';
import { COLOR } from '../../style';

const ScenarioPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background: ${COLOR.light1};
`;

const ScenarioListContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`;

export const Style = {
    ScenarioPageContainer,
    ScenarioListContainer,
}