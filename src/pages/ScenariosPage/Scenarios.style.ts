import styled from 'styled-components';

import { createStyles } from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

const drawerWidth = 250;

const ScenarioPageListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between
    align-items: flex-start;
    padding: 2rem;
`;

const ScenarioListContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
`;

const styles = (theme: Theme) => createStyles({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        paddingLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
})

const ScenarioPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 250px;
    padding: 1rem;
`;

export const Style = {
    ScenarioPageContainer,
    ScenarioPageListContainer,
    ScenarioListContainer,
    styles,
    TitleContainer,
}