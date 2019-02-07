import styled from 'styled-components'; // { css } 
import { COLOR } from "../../style";

import { createStyles } from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

const AppTitle = styled.span`
    flex: 1;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
`

// const HeaderStyle = css`
//     .ToolBar {
//         background: ${COLOR.dark} !important;
//     }
// `
const background = `${COLOR.dark} !important`;
const styles = (theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appTitle: {
        flex: 1,
        fontSize: `1.3rem`,
        display: `flex`,
        justifyContent: `center`,
    },
    toolBar: {...theme.mixins.toolbar, background},
})

export const Styled = {
    styles,
    AppTitle,
};