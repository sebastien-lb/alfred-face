import styled from 'styled-components';

import { createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// import { COLOR } from '../../style';

const AddScenarioFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`;

const SectionFormContainer = styled.div`
    width: 100%;
`;

const CardContainer = styled.div`
    width: fit-content;
    padding: 1rem 0; 
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const styles = (theme: Theme) => createStyles(
    {
        toolbar: theme.mixins.toolbar,
    }
)

export const Style = {
    AddScenarioFormContainer,
    CardContainer,
    CardsContainer,
    SectionFormContainer,
    styles,
}
