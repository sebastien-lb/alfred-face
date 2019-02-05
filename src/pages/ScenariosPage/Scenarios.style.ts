import styled from 'styled-components';

import { createStyles } from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

const drawerWidth = 250;

const ScenarioPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
`;

const ScenarioListContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const Style = {
    ScenarioPageContainer,
    ScenarioListContainer,
    styles,
}