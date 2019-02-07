import styled from 'styled-components';
import { COLOR } from '../../style';

import { createStyles } from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

const AddSensorForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
        margin: 0.5rem 0 ! important;
    }
`;

const DashboardPageContainer = styled.div`
    padding: 2rem;
    background: ${COLOR.light1};
`;

const ObjectCardContainer = styled.div`
    padding: 0.5rem 0;
`;

const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
});


export const Style = {
    AddSensorForm,
    DashboardPageContainer,
    ObjectCardContainer,
    styles,
}
